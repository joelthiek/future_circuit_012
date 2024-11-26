import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import SignInPage from "./pages/SignInPage/SignInPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilderpage"
import { PrivateRoute } from "./contextAPI/privateRoute/PrivateRoute"
import ResumeMainPage from "./pages/ResumePage/ResumeMainPage"
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<SignInPage />} />
        <Route path='/register' element={<SignUpPage />} />
      
        <Route path="/create-resume" element={
            <PrivateRoute>
              <ResumeBuilder/>
            </PrivateRoute>
        }/>
      <Route path="/resume" element={<ResumeMainPage/>}/>
      </Routes>
    </div>
  )
}

export default App
