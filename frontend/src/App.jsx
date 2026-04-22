import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home, Users, Folder, BarChart3 } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Projetos from './pages/Projetos'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  COMAC IA
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50">
                  <Home size={20} /> <span>Dashboard</span>
                </Link>
                <Link to="/alunos" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50">
                  <Users size={20} /> <span>Alunos</span>
                </Link>
                <Link to="/projetos" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50">
                  <Folder size={20} /> <span>Projetos</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
