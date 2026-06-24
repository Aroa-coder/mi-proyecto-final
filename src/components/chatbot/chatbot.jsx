import { useState } from 'react'
import './ChatBot.css'

const botOptions = [
  {
    question: '¿Qué servicios ofrece Aroa?',
    answer:
      'Aroa puede desarrollar interfaces web responsive, portfolios profesionales, landing pages, maquetación con HTML y CSS, funcionalidades con JavaScript y componentes reutilizables con React.',
  },
  {
    question: '¿Qué tecnologías domina?',
    answer:
      'Actualmente trabaja con HTML, CSS, JavaScript, React, Git y buenas prácticas de accesibilidad web, diseño responsive y experiencia de usuario.',
  },
  {
    question: '¿Qué proyectos ha realizado?',
    answer:
      'En el portfolio puedes ver proyectos como un portfolio web profesional, una calculadora de IVA con JavaScript y una landing page con asistente virtual.',
  },
  {
    question: '¿Está disponible para colaborar?',
    answer:
      'Sí. Aroa está ampliando experiencia en desarrollo web y abierta a nuevas oportunidades profesionales, colaboraciones y proyectos frontend.',
  },
  {
    question: '¿Cómo puedo contactar?',
    answer:
      'Puedes usar el formulario de contacto del portfolio o visitar sus perfiles profesionales de GitHub y LinkedIn en el footer.',
  },
]

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(
    'Hola, soy el asistente virtual del portfolio de Aroa. Puedes preguntarme sobre sus servicios, tecnologías, proyectos o formas de contacto.'
  )

  function handleQuestion(answer) {
    setSelectedAnswer(answer)
  }

  return (
    <aside
      className="chatbot"
      aria-label="Asistente virtual del portfolio"
    >
      {isOpen && (
        <section
          className="chatbot-panel"
          aria-labelledby="chatbot-title"
          aria-live="polite"
        >
          <header className="chatbot-header">

            <div>
              <h2 id="chatbot-title">
                Asistente virtual
              </h2>

              <p>
                Portfolio de Aroa
              </p>
            </div>

            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar asistente virtual"
            >
              ×
            </button>

          </header>


          <div className="chatbot-message">

            <p>
              {selectedAnswer}
            </p>

          </div>


          <div className="chatbot-options">

            {botOptions.map((option) => (
              <button
                key={option.question}
                type="button"
                onClick={() => handleQuestion(option.answer)}
              >
                {option.question}
              </button>
            ))}

          </div>
        </section>
      )}


      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen
            ? 'Cerrar asistente virtual'
            : 'Abrir asistente virtual'
        }
        aria-expanded={isOpen}
      >
        💬
      </button>
    </aside>
  )
}

export default ChatBot