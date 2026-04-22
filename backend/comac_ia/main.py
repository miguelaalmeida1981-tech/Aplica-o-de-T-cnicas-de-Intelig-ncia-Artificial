from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime
from typing import List
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="COMAC IA Platform MVP", version="1.0.0")

# Database
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./comac.db")
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
class Aluno(Base):
    __tablename__ = "alunos"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    ra = Column(String, unique=True, index=True)
    xp = Column(Integer, default=0)

class Projeto(Base):
    __tablename__ = "projetos"
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    aluno_id = Column(Integer)
    score_ia = Column(Float, default=0.0)
    status = Column(String, default="draft")

Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Pydantic Models
class AlunoCreate(BaseModel):
    nome: str
    ra: str

class AlunoResponse(BaseModel):
    id: int
    nome: str
    ra: str
    xp: int

class ProjetoCreate(BaseModel):
    titulo: str
    aluno_id: int

class ProjetoResponse(BaseModel):
    id: int
    titulo: str
    aluno_id: int
    score_ia: float
    status: str

# Endpoints MVP
@app.post("/alunos/", response_model=AlunoResponse)
def criar_aluno(aluno: AlunoCreate, db: Session = Depends(get_db)):
    db_aluno = Aluno(**aluno.dict())
    db.add(db_aluno)
    db.commit()
    db.refresh(db_aluno)
    return db_aluno

@app.get("/alunos/", response_model=List[AlunoResponse])
def listar_alunos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    alunos = db.query(Aluno).offset(skip).limit(limit).all()
    return alunos

@app.post("/projetos/", response_model=ProjetoResponse)
def criar_projeto(projeto: ProjetoCreate, db: Session = Depends(get_db)):
    db_projeto = Projeto(**projeto.dict())
    db.add(db_projeto)
    db.commit()
    db.refresh(db_projeto)
    return db_projeto

@app.get("/projetos/", response_model=List[ProjetoResponse])
def listar_projetos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    projetos = db.query(Projeto).offset(skip).limit(limit).all()
    return projetos

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
