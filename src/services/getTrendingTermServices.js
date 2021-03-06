import { useState } from "react"
import {apiKey, API_URL} from './settings'


export default function getTrendingTerms() {
    const apiUrl = `${API_URL}trending/searches?api_key=${apiKey}`  
    
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      return data
     
    })
}