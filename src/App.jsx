import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header onOpenModal={() => setModalOpen(true)} />
      <Hero />
      <Services />
      <Products onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App