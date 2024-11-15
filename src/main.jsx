import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../src/pages/Footer/Footer.jsx"

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <App />
    <Footer/>
  </Router>,
)
