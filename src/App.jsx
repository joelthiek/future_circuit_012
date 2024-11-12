import {Routes,Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<SignInPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>
      </Routes>
    </div>
  )
}

export default App
