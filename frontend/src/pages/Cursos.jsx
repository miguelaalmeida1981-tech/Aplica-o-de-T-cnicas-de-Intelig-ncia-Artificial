import { useState, useEffect } from 'react'
import axios from 'axios'
import { Play, CheckCircle, Clock } from 'lucide-react'

const Cursos = () => {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    // Carregar cursos
    setCursos([
      {
        id: 1,
        titulo: "Fundamentos de IA/ML",
        modulo: 1,
        progresso: 75,
        conteudo: {
          video: "https://youtube.com/embed/dQw4w9WgXcQ",
          material: "Introdução completa aos conceitos..."
        }
      },
      {
        id: 2,
        titulo: "Python para IA",
        modulo: 2,
        progresso: 40,
        conteudo: {
          video: "https://youtube.com/embed/dQw4w9WgXcQ",
          material: "NumPy, Pandas, Scikit-learn..."
        }
      }
    ])
  }, [])

  return (
    <div>
      <h1 class
