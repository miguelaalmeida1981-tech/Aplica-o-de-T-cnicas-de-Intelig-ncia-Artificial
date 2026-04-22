const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    facilidade: 0,
    utilidade: 0,
    comentarios: ''
  })

  const submitFeedback = async () => {
    await axios.post('/feedback/', feedback)
    alert('Feedback enviado! Obrigado! 🎉')
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl border w-80">
      <h3 className="font-bold mb-4">Como está sendo? ⭐</h3>
      <div className="space-y-3">
        <label>Facilidade de uso: 
          <input type="range" min="1" max="5" 
                 value={feedback.facilidade}
                 onChange={(e) => setFeedback({...feedback, facilidade: e.target.value})}
                 className="w-full" />
        </label>
        <label>Utilidade: 
          <input type="range" min="1" max="5" 
                 value={feedback.utilidade}
                 onChange={(e) => setFeedback({...feedback, utilidade: e.target.value})}
                 className="w-full" />
        </label>
        <textarea 
          placeholder="O que achou? Sugestões?"
          value={feedback.comentarios}
          onChange={(e) => setFeedback({...feedback, comentarios: e.target.value})}
          className="w-full p-2 border rounded-lg"
        />
        <button onClick={submitFeedback} 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold">
          Enviar Feedback
        </button>
      </div>
    </div>
  )
}
