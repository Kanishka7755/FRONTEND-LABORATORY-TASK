import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav>
          <h2>My Website</h2>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;