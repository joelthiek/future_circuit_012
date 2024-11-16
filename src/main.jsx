import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Define the paths where the footer should not appear
  const hideFooterPaths = ['/create-resume'];

  return (
    <>
      <Navbar />
      <App />
      {/* Conditionally render Footer */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Router>
    <Layout />
  </Router>
);
