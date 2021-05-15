import React, {useState, useReducer} from 'react'
import {Link, useLocation} from 'wouter'

const RATIGNS = ['g','pg', 'pg-13', 'r']
const reducer = (state, params) =>{ //actualiza ele stado dependiendo de als condiciones de params
   
    return {
        ...state ,
        keyword : params,
        times:state.times + 1
        
    }
}

function SearchForm ({initialKeyword= '',initialRating = 'g'}) {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating) 

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        times : 0
    }) //primer pos el estado, metodo para accionar cosas para actualziar estado
    const {keyword, times} = state
    const [path, pushLocation] = useLocation()

    const updateKeyword = (keyword) =>{
        dispatch(keyword) 
    }
    
    //const [times, setTimes]= useState(0)

    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
        //navegar
    }

    const handleChange = evt =>{
        updateKeyword(evt.target.value)
        //setTimes(times + 1)

        
    }

    const handleChangeRating = evt =>{
        setRating(evt.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />

        <select value = {rating} onChange = {handleChangeRating}>
            <option disabled>Ratign type</option>
            {RATIGNS.map(rating => <option key = {rating}>{rating} </option>)}
        </select>
        <small>{times}</small>
      </form>
    )
}

export default React.memo(SearchForm )



/*
import React, {useState, useReducer} from 'react'
import {Link, useLocation} from 'wouter'

const RATIGNS = ['g','pg', 'pg-13', 'r']
const reducer = (state, params) =>{ //actualiza ele stado dependiendo de als condiciones de params
    console.log
    return state 
}

function SearchForm ({initialKeyword= '',initialRating = 'g'}) {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating) 

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        times : 0
    }) //primer pos el estado, metodo para accionar cosas para actualziar estado
    const {keyword, times} = state
    const [path, pushLocation] = useLocation()

    const updateKeyword = (keyword) =>{
        dispatch(keyword) 
    }
    
    //const [times, setTimes]= useState(0)

    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
        //navegar
    }

    const handleChange = evt =>{
        updateKeyword(evt.target.value)
        //setTimes(times + 1)

        
    }

    const handleChangeRating = evt =>{
        setRating(evt.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />

        <select value = {rating} onChange = {handleChangeRating}>
            <option disabled>Ratign type</option>
            {RATIGNS.map(rating => <option key = {rating}>{rating} </option>)}
        </select>
        <small>{times}</small>
      </form>
    )
}

export default React.memo(SearchForm )


*/