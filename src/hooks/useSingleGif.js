import { useEffect, useState } from 'react'
import getSingleGif from '../services/getSingleGif'
import useGifs from './useGifs'
export default function useSingleGif ({id}){
        const {gifs} = useGifs()
        const [isLoading, setIsLoading] = useState(false)
        const [isError, setIsError] = useState(false)
        const gifFromCache = gifs.find(singleGif => singleGif.id === id)

        const [gif, setGif] = useState(gifFromCache)

        useEffect(function  () {
            if(!gif){
                setIsLoading(true)
                    getSingleGif({id})
                    .then(gif =>{
                        setGif(gif)
                        setIsLoading(false)
                        setIsError(false)
                    //llamamos a servicio si no tenemos gif
                    }).catch(err =>{
                        setIsLoading(false)
                        setIsError(true)
                    })
            }
        }, [gif, id])

        return {gif, isLoading, isError}
}