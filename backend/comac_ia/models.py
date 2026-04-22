from sqlalchemy import Column, Integer, String, JSON

class Curso(Base):
    __tablename__ = "cursos"
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    modulo = Column(Integer)
    conteudo = Column(JSON)

class Progresso(Base):
    __tablename__ = "progressos"
    id = Column(Integer, primary_key=True, index=True)
    aluno_id = Column(Integer)
    curso_id = Column(Integer)
    progresso = Column(Integer, default=0)
    concluido = Column(String, default=False)
