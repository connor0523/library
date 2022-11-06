import "./index.css";
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from './data.js'

function App() {
  return(
    <Router>
      <div>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books books={books} />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}


export default App;
