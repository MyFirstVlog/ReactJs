import React from 'react'
import {Link} from 'wouter'
import './Gif.css';
import Fav from './Fav'
export default function Gif({title,id,url}){
       return( <div className = "Gif"> 

       <div className = "Gif-buttons">
         <Fav id = {id}></Fav>
         </div>
          <Link to={`/gif/${id}`}>
          
          <img src={url}></img>
          </Link>
          </div>)
}