import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Catalogos } from './components/Catalogos'
import { Contacto } from './components/Contacto'
import { Header } from './components/Header'
import { MarcasDistribuidas } from './components/MarcasDistribuidas'
import { PotenciApp } from './components/PotenciApp'
import { Productos } from './components/Productos'
import { QuienesSomos } from './components/QuienesSomos'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<PotenciApp />} />
        <Route path='/quienes_Somos' element={<QuienesSomos />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/marcas_distribuidas' element={<MarcasDistribuidas />} />
        <Route path='/catalogo' element={<Catalogos />} />
        <Route path='/contacto' element={<Contacto />} />
    </Routes>
  </BrowserRouter>
)
