import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './sass/main.scss'

const RootComponent = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path='/logement/:id' element={<Logement />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </>
      <Footer />
    </Router>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootComponent />)
