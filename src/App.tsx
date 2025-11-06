// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AcoesPage from './Pages/Acoes/AcoesPage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/acoes" element={<AcoesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
