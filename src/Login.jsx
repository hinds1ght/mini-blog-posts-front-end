import { useRef } from 'react'
//import { sanitizeInput } from "../utils/sanitizeInput"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../utils/authContext.jsx" 

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

     const data = await login(emailRef.current.value, passwordRef.current.value)
        console.log(data)
     if (!data) {
            throw new Error("you failed")
        } console.log("user and token:", data)
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
                <button type='submit'>Login</button>

            </form>
        </>
        
    )
}

export default Login;