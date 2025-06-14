import { useRef, useState } from 'react'
import { sanitizeInput } from "../utils/sanitizeInput"
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from "../utils/authContext.jsx" 

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null)
        setLoading(true)
    
        try {
          await login(emailRef.current.value, passwordRef.current.value)
          navigate('/posts') // ✅ redirect after successful login
        } catch (err) {
          setError('Invalid email or password')
        } finally {
          setLoading(false)
        }
      } 
    
     return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login Form:</h2>
                <label name="email">Email: </label>
                <input type="text" name="email" ref={emailRef}/>
                <br />
                <br />
                <label name="password">Password: </label>
                <input type="password" name="password" ref={passwordRef}/>
                <br />
                <br />
                <button type='submit' disabled={loading}>Login</button>
                {error && <p>{error}</p>}
            </form>
        </>      
    )
}

export default Login;