import React from 'react';
import './App.css';
import './produtos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Produtos from './paginas/produtos';
import Detalhes from './paginas/detalhes';
import Login from './paginas/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } ></Route>
        <Route path="/produtos" element={ <Produtos /> } ></Route>
        <Route path="/produtos/detalhes/:id" element={ <Detalhes /> } ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
