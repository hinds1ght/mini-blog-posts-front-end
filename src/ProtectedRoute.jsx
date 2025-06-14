import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}){

    const user = true;

    if (!user) {
        console.log("No user")
        return <Navigate to="/" replace/>
    }
    return children
}