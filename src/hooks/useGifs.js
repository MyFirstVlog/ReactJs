import {useEffect, useState, useContext} from 'react'
import getGifs from '../services/getGifs'
import gifsContext from '../context/gifsContext'

const INITIAL_PAGE = 0

export default function useGifs({keyword, rating}= {keyword : null}){

    const [loading, setLoading] = useState(false)    

    const [loadingPage, setLoadingPage] = useState(false)
    
    const {gifs, setGifs} = useContext(gifsContext)

    const [page, setPage] = useState(INITIAL_PAGE)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function(){
        setLoading(true)
        
        console.log('efecto ejecutado')
        getGifs({keyword : keywordToUse,rating})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)  
            localStorage.setItem('lastKeyword', keyword)  
        })
        //setGifs(diffrentGIFS)    
        
      },[keyword,keywordToUse, setGifs, rating])

      useEffect(function (){

        if(page === INITIAL_PAGE)
        return
        setLoadingPage(true)
        getGifs({keyword: keywordToUse,rating , page:page})
        .then(nextGifs =>{
            setGifs(prevGifs => prevGifs.concat(nextGifs)) //estados anteriore y nuevos
            setLoadingPage(false)
        })

      }, [page])

      return {loading,loadingPage, gifs,page, setPage}
}