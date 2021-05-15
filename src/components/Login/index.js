import React, { useEffect, useState } from 'react'
import {useLocation} from 'wouter'
import useUser from '../../hooks/useUser'
import './login.css'
export default function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {isLogged,isLoginLoading,isLoginError,login, logout } = useUser()
    const [,navigate] = useLocation()

    useEffect(()=>{
        if (isLogged) navigate('/')
    }, [isLogged, navigate])
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        login({username, password})
        //navigate('/')

    }

    return (
        <>
        <h2>
            Login</h2>
            {isLoginLoading && <strong>Checkimg Credentials</strong>}
            {!isLoginLoading &&
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Username
                    <input placeholder='Username' onChange = {e => setUsername(e.target.value)} value={username}/>
                </label>

                <label>
                    Password
                    <input type='password' placeholder='Password' onChange = {e => setPassword(e.target.value)} value={password}/>
                </label>
                    <button className='btn'>Login</button>
            </form>}
            {isLoginError && <strong> Invalid Credentials</strong>}
        
        </>
    )
}