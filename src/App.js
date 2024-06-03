import './App.css';
import { Banner } from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
