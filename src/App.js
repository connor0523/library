import "./index.css";
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";


function App() {
  return(
    <Router>
      <div>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books Books={Books} />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}


export default App;
