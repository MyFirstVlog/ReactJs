import React, {useEffect, useState} from 'react'; 
import Gif from './Gif'
import getGifs from '../services/getGifs'
import './styles.css'
export default function ListOfGifs({gifs}){
    return <div className = 'ListOfGifs'>{
    gifs.map((eachOne)=>
        <Gif 
        key = {eachOne.id}
        title = {eachOne.title} 
        url = {eachOne.url} 
        id = {eachOne.id}/>//si fuera solo una linea no toca poner el return pero como es multiple html es obligatorio)
        )
        }
    </div>
}