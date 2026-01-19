

import { Navigate, Outlet } from "react-router-dom";
import userStore from "../store/userStore";


export default function Protected() {
    const {user, loading} = userStore()
    
    if (loading) return <div>Loading...</div>;
    
    return user ? <Outlet/> : <Navigate to={'/login'}/>
    
}