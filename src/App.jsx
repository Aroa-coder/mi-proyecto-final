import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import ChatBot from './components/ChatBot/ChatBot'

import "./styles/App.css";

function App() {
  return (
    <>
      {/* Skip link accesible (debe estar aquí arriba del todo) */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Header />

      <MainContent />

      <Footer />
      
      <ChatBot />

    </>
  )
}

export default App