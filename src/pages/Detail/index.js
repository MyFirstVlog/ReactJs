import React, {useContext} from 'react'
import StaticContext from '../../context/StaticContext'
import gifsContext from '../../context/gifsContext'
import Gif from '../../components/Gif'
import useSingleGif from '../../hooks/useSingleGif'
import Spinner from '../../components/Spinner'
import { Redirect } from 'wouter'
import useTitle from '../../hooks/useTitle'
import {Helmet} from 'react-helmet'
export default function Detail({params}){
    

    const {gif, isLoading, isError } = useSingleGif({id: params.id})

    const title = gif ? gif.title : ''
    useTitle({description:`Detail of ${title}`,title : title})

    if(isLoading) return (
        <>
        <Helmet>
            <title>Cargando...</title>
        </Helmet>
        <Spinner/>
        </>
    
    )

    if(isError) return <Redirect to='error404'/>

    if ( !gif) return null


    return <>
        <h2 className="App-title">{gif.title}</h2>
        <Gif {...gif}/>
    </> 
}