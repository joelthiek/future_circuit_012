import React, { useState } from "react"
import { signUp } from "../../firebase/authService"
import { Link, useNavigate } from "react-router-dom"
import signupImage from "../../assets/image/SignUp_image.png"
import "./SignUpPage.css"
const SignUpPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (!agree) {
      alert("Please agree to the terms of service.")
      return
    }
    setLoading(true)
    try {
      await signUp(email, password)
      alert("User registered successfully")
      navigate("/auth")
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <div className='signup-container'>
        <div className='signup-form'>
          <h2>Sign up</h2>
          <form onSubmit={handleSignUp}>
            <div className='input-field'>
              <span role='img' aria-label='user'>
                👤
              </span>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                required
              />
            </div>
            <div className='input-field'>
              <span role='img' aria-label='email'>
                📧
              </span>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div className='input-field'>
              <span role='img' aria-label='password'>
                🔒
              </span>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
              />
            </div>
            <div className='checkbox-field'>
              <input
                type='checkbox'
                id='agree'
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label htmlFor='agree'>
                I agree to all statements in{" "}
                <a href='#terms'>Terms of service</a>
              </label>
            </div>
            <button className='submitButton' type='submit' disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div className='already-member'>
            <Link to='/auth'>I am already a member</Link>
          </div>
        </div>
        <div className='signup-image'>
          <img src={signupImage} alt='signup image' />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
