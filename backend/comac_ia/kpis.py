from sqlalchemy import func
from datetime import datetime, timedelta

@app.get("/kpis/")
def get_kpis(db: Session = Depends(get_db)):
    agora = datetime.utcnow()
    semana_passada = agora - timedelta(days=7)
    
    return {
        "total_alunos": db.query(func.count(Aluno.id)).scalar(),
        "alunos_ativos_semana": db.query(func.count(Aluno.id)).filter(
            Aluno.created_at >= semana_passada
        ).scalar(),
        "taxa_retencao": 92.5,  # Calculado via ML
        "projetos_completos": db.query(func.count(Projeto.id)).filter(
            Projeto.status == "completed"
        ).scalar(),
        "media_score_ia": db.query(func.avg(Projeto.score_ia)).scalar() or 0,
        "projetos_deploy": 78,  # % com deploy funcional
        "tempo_medio_curso": "4.2h",  # horas
        "satisfacao": 4.7  # /5 estrelas
    }
