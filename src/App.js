import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cars' element={<Cars />}></Route>
    </Routes>
  );
}

export default App;
