import { useAuth } from "../utils/authContext"
import { useNavigate } from "react-router-dom"

function Posts(){
    const { logout } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(){
        await logout()
        navigate('/')
    }

    return (<>
    <div>Posts Component</div>
    <br />
    <button onClick={handleSubmit}>Logout</button>
    </>)
}

export default Posts;