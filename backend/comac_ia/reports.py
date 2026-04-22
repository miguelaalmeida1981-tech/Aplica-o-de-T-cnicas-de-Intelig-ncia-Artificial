import smtplib
from email.mime.text import MimeText
from datetime import datetime

def enviar_relatorio_diario(kpis):
    msg = MimeText(f"""
    📊 RELATÓRIO DIÁRIO COMAC IA - {datetime.now().strftime('%d/%m')}
    
    ✨ Destaques:
    - Alunos ativos: {kpis['total_alunos']}
    - Retenção: {kpis['taxa_retencao']}%
    - Score médio IA: {kpis['media_score_ia']:.1f}
    
    🚀 Meta de deploy: {kpis['projetos_deploy']}% ✅
    """)
    
    msg['Subject'] = 'COMAC IA - Relatório Diário'
    msg['From'] = 'noreply@comac-ia.com.br'
    msg['To'] = 'coordenação@comac.petropolis.br'
    
    # Enviar email
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login('noreply@comac-ia.com.br', 'senha_app')
        server.send_message(msg)
