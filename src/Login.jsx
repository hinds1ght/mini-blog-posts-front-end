import { useEffect, useRef } from 'react'
import { handleLogin } from "../utils/handleLogin"
//import { useNavigate } from 'react-router-dom'

function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e){
        e.preventDefault();

        handleLogin(emailRef.current.value, passwordRef.current.value)
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