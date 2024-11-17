import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, useLocation } from "react-router-dom"
import { AuthProvider } from "./contextAPI/AuthContext.jsx"

function Layout() {
  const location = useLocation()

  const hideFooterPaths = ["/create-resume", "/auth", "/register"]

  return (
    <>
      <App />
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  )
}

createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <Layout />
    </AuthProvider>
  </Router>
)
