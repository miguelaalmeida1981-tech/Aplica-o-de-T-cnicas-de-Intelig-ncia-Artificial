import { useState, useEffect } from 'react'
import axios from 'axios'

const Alunos = () => {
  const [alunos, setAlunos] = useState([])
  const [formData, setFormData] = useState({ nome: '', ra: '' })

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/alunos/')
      setAlunos(response.data)
    } catch (error) {
      console.error('Erro ao buscar alunos:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/alunos/', formData)
      fetchAlunos()
      setFormData({ nome: '', ra: '' })
    } catch (error) {
      console.error('Erro ao criar aluno:', error)
    }
  }

  useEffect(() => {
    fetchAlunos()
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alunos</h1>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="RA"
            value={formData.ra}
            onChange={(e) => setFormData({...formData, ra: e.target.value})}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Adicionar
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Nome</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">RA</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">XP</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{aluno.id}</td>
                <td className="px-6 py-4 font-medium">{aluno.nome}</td>
                <td className="px-6 py-4">{aluno.ra}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {aluno.xp} XP
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Alunos
