import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home } from './pages/home';
import { Inserir } from './pages/inserir';
import { Consultar } from './pages/consultar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inserir' element={<Inserir/>}/>
      <Route path='/consultar' element={<Consultar/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


