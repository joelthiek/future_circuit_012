import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Define the paths where the footer should not appear
  const hideFooterPaths = ['/create-resume'];

  return (
    <>
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
