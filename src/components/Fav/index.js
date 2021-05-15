import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import {useLocation} from 'wouter'
import ModalPortal from '../Modal'
import Login from '../../components/Login'
import './Fav.css'
export default function Fav ({id}){

    const {isLogged,fav, favs} = useUser()
    const [, navigate] = useLocation()
    const [showModal, setShowModal] = useState(false)

    const isFaved = favs.some(favId => favId === id) // si el id del fav esta en la lista de favoriatas

    const handleClick = () =>{
        if(!isLogged) return setShowModal(true)
        fav({id})
    }

    const handleClose = ()=>{
        setShowModal(false)
    } 

    const [
        label, 
        emoji
         ] = isFaved ? 
            ['Remove','❎']
            :['Add','😍']

    return( 
    <>
    
    <button className='gf-Fav' onClick={handleClick}>
        <span aria-label={label}>{emoji}</span>
    </button>
        
    {showModal && <ModalPortal onClose={handleClose}><Login/></ModalPortal>}    
    </>)
}