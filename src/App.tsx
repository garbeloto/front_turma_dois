import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home';
import CadastroUsuario from './Pages/CadastroUsuario/CadastroUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
