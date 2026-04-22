import { useEffect, useState } from 'react'
import { BarChart3, Users, Folder, Award } from 'lucide-react'
import axios from 'axios'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalAlunos: 0,
    totalProjetos: 0,
    mediaScore: 0
  })

  useEffect(() => {
    // Mock data para MVP
    setStats({
      totalAlunos: 25,
      totalProjetos: 12,
      mediaScore: 8.7
    })
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard COMAC IA</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
          <div className="flex items-center">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <div className="ml-6">
              <p className="text-3xl font-bold text-gray-900">{stats.totalAlunos}</p>
              <p className="text-gray-600">Alunos Ativos</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
          <div className="flex items-center">
            <div className="p-4 bg-green-100 rounded-2xl">
              <Folder className="w-10 h-10 text-green-600" />
            </div>
            <div className="ml-6">
              <p className="text-3xl font-bold text-gray-900">{stats.totalProjetos}</p>
              <p className="text-gray-600">Projetos</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
          <div className="flex items-center">
            <div className="p-4 bg-purple-100 rounded-2xl">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <div className="ml-6">
              <p className="text-3xl font-bold text-gray-900">{stats.mediaScore}</p>
              <p className="text-gray-600">Média IA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
