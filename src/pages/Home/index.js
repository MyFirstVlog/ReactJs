import React, { useState, useEffect, useCallback} from 'react'
import {Link, useLocation} from 'wouter'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from "../../hooks/useGifs"
import Category from '../../components/Category'

import TrendingSearches from '../../components/TrendingSearches'
import LazyTrending from '../../components/TrendingSearches'
import SearchForm from '../../components/SearchForm'


export default function Home(){
   
    const [path, pushLocation] = useLocation()


    const {loading, gifs} = useGifs()
     
    


    const handleSubmit = useCallback(({keyword}) =>{        
        pushLocation(`/search/${keyword}`)
        //navegar
    },[pushLocation]) //guarda la funcion para que en el render no se tenga que 
    //volver a crear , y solo cambia cuando alguna dependencia de ella es meodifcada

    

    return (
        <>
       <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <LazyTrending />
        </div>
      </div>
        </>
    )
}