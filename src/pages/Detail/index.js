import React, {useContext} from 'react'
import StaticContext from '../../context/StaticContext'
import gifsContext from '../../context/gifsContext'
import Gif from '../../components/Gif'
export default function Detail({params}){
    const staticContext = useContext(StaticContext)

    const {gifs} = useContext(gifsContext)

    const gif = gifs.find(singleGif => singleGif.id == params.id)

    
    console.log(gifs)//capturamos solo gifs

    return  <Gif {...gif}/> 
}