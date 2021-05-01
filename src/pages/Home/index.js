import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'wouter'
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from "../../hooks/useGifs"
import Category from '../../components/Category'
import './style.css'
import TrendingSearches from '../../components/TrendingSearches'
import LazyTrending from '../../components/TrendingSearches'


export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()


    const {loading, gifs} = useGifs()
     
    


    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
        //navegar
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return (
        <>
       <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
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