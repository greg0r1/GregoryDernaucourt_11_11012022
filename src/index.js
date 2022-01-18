import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import HousingPage from './pages/HousingPage'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About';
import './utils/style/GlobalStyle.css'

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/HousingPage/:cardId" element={<HousingPage />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
