import { useRef } from 'react'
import { handleLogin } from "../utils/handleLogin"
import { useNavigate } from 'react-router-dom'

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

     const data = await handleLogin(emailRef.current.value, passwordRef.current.value, navigate)
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