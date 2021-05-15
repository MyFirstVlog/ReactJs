import React from 'react'
import register from '../../services/register'
import {Formik} from 'formik'
import './register.css'

export default function Register (){
    return <>
     <h2>Formulario de registro</h2>
     <Formik
     initialValues = {{username:'', password: '', email : ''}}

     validate = {values =>{
        const errors = {}

         if(!values.username){
             errors.username = 'Required username \n'
         }

         if(!values.email){
            errors.email = 'Required email \n'
        }


         if(!values.password){
            errors.password = 'Required password \n'
        }

        return errors
     }}

     onSubmit = {(values) => {
        return register(values)
    }}
        >
    
        {
            ({handleChange,handleSubmit, isSubmitting, errors}) => <form className= 'form' onSubmit={handleChange,handleSubmit} >
                <label>
                    Name
                    <input placeholder = 'type here your username' name='username' onChange={handleChange}></input>
                </label>
                <label>
                    Email
                    <input placeholder = 'type here your email' name='email' onChange={handleChange}></input>
                </label>
                <label>
                    Password
                    <input name='password' placeholder = 'type here your password' onChange={handleChange}></input>
                </label>
                <button className='btn' disabled={isSubmitting}>Register</button>

                <span style = {{color:'red'}}>
                   
                    {errors.username || ''} 
                    {errors.email || ''}
                    {errors.password || ''} 
              

                </span>
            </form>
        }     
    </Formik>
     </>
}