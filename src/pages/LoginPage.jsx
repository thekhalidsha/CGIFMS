import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../features/basicSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(update({ isLoginPage: true }))
    // return(<Navigate to={'/'} />)
    useEffect(() => {
        return navigate('/')
    })
}

export default LoginPage