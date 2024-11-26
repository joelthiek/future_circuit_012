import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { BrowserRouter as Router, useLocation } from "react-router-dom"
import { AuthProvider } from "./contextAPI/AuthContext.jsx"
import { ChakraProvider } from "@chakra-ui/react"

function Layout() {
  const location = useLocation()

  const hideFooterPaths = ["/create-resume", "/auth", "/register", "/resume"]

  return (
    <>
      <App />
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  )
}

createRoot(document.getElementById("root")).render(
  <Router>
    <ChakraProvider>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </ChakraProvider>
  </Router>
)
