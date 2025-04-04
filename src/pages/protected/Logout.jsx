import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem('isAuth');
    const nav = useNavigate();
    useEffect(()=>{
      return nav('/')
    })
}

export default Logout