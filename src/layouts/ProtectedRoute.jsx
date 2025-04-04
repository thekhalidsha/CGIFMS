import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'


const ProtectedRoute = () => {
    if(localStorage.getItem('isAuth') == 'true'){
        return (
            <div>
                <Outlet/>
            </div>
          )
    }else{
        toast.error('Login First!', {autoClose: 2000})
        return <Navigate to='/login'/>
    }
  
}

export default ProtectedRoute