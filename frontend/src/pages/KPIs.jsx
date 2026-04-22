import { useEffect, useState } from 'react'
import { TrendingUp, Users, Award, Zap, Star } from 'lucide-react'
import axios from 'axios'

const KPIs = () => {
  const [kpis, setKpis] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8000/kpis/').then(res => setKpis(res.data))
  }, [])

  const metas = {
    retencao: 90,
    projetos_deploy: 80,
    satisfacao: 4.5
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-12">KPIs COMAC IA</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* KPI Cards */}
        <KpiCard 
          title="Alunos Ativos" 
          value={kpis.total_alunos || 0}
          trend="+12%"
          icon={<Users className="w-12 h-12 text-blue-600" />}
          color="blue"
        />
        
        <KpiCard 
          title="Taxa de Retenção"
          value={`${kpis.taxa_retencao || 0}%`}
          meta={metas.retencao}
          trend="+2.3%"
          status="success"
          icon={<TrendingUp className="w-12 h-12 text-green-600" />}
          color="green"
        />
        
        <KpiCard 
          title="Média Score IA"
          value={kpis.media_score_ia?.toFixed(1) || 0}
          trend="+0.4"
          icon={<Award className="w-12 h-12 text-yellow-600" />}
          color="yellow"
        />
        
        <KpiCard 
          title="% Projetos Deploy"
          value={`${kpis.projetos_deploy || 0}%`}
          meta={metas.projetos_deploy}
          trend="+8%"
          status="warning"
          icon={<Zap className="w-12 h-12 text-purple-600" />}
          color="purple"
        />
        
        <KpiCard 
          title="Satisfação"
          value={kpis.satisfacao || 0}
          meta={metas.satisfacao}
          trend="+0.2"
          status="success"
          icon={<Star className="w-12 h-12 text-orange-600" />}
          color="orange"
        />
      </div>
    </div>
  )
}

const KpiCard = ({ title, value, trend, icon, color, meta, status }) => (
  <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all group">
    <div className="flex items-center justify-between mb-6">
      <div className={`p-4 bg-${color}-50 rounded-2xl group-hover:scale-105 transition-transform`}>
        {icon}
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        status === 'success' ? 'bg-green-100 text-green-800' :
        status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
        'bg-gray-100 text-gray-800'
      }`}>
        {trend}
      </span>
    </div>
    <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
    <p className="text-gray-600 font-medium">{title}</p>
    {meta && (
      <p className="text-sm text-gray-500 mt-2">
        Meta: <span className="font-semibold">{meta}%</span>
      </p>
    )}
  </div>
)

export default KPIs
