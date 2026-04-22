CURSOS_BASICO = [
    {
        "id": 1,
        "titulo": "Fundamentos de IA/ML",
        "modulo": 1,
        "conteudo": {
            "video": "https://youtube.com/embed/fundamentos-ia",
            "material": "Introdução a Machine Learning...",
            "quiz": ["O que é IA?", "Tipos de ML"]
        }
    },
    {
        "id": 2,
        "titulo": "Python para IA",
        "modulo": 2,
        "conteudo": {
            "video": "https://youtube.com/embed/python-ia",
            "material": "NumPy, Pandas, Scikit-learn",
            "quiz": ["Arrays NumPy", "DataFrames Pandas"]
        }
    }
]

@app.get("/cursos/")
def listar_cursos():
    return CURSOS_BASICO

@app.post("/progresso/")
def atualizar_progresso(progresso: dict):
    # Simular salvamento
    return {"status": "atualizado", "progresso": progresso}
