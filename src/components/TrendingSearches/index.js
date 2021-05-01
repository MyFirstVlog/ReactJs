import React, { useEffect, useState, useRef } from 'react'
import getTrendingTerms from '../../services/getTrendingTermServices'
import Category from '../Category'

function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])

    return <Category options={trends} name = 'Tendencias' />
    
}

export default function LazyTrending(){
    const [show, setShow] = useState(false)
    const elementRef = useRef() //baul, el valor de la cte se mantiene inalterado por renderizado

    useEffect(function(){
        //se ejecuta on change cuando hay una interseccion
        const onChange = (entries, observer) => {
                console.log(entries)
                console.log(entries[0])
                const el = entries[0]
                if(el.isIntersecting){
                    setShow(true)
                    observer.disconnect()
                }

        }

        const observer = new IntersectionObserver(onChange,{
            rootMargin : '100px' //cuadno haya una dist de 100 ya dira que el elemento esta en initerseccioin con el view
        })
        
        observer.observe(elementRef.current)
    })

    return <div ref = {elementRef}>
            {show ? <TrendingSearches/> : null}
    </div>
}