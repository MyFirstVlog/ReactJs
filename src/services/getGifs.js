import { useState } from "react"


export default function getGifs({keyword = 'camaleon', page = 0} = {}) {
    
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=5El953it319EnsvYVOm9Wk4AWGjZanb1&q=${keyword}&limit=25&offset=${page * 25}&rating=g&lang=en`  
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map((image)=>{
        const{images, title,id} = image
        const url = images.downsized_medium.url
        return {title, id, url}
    })
      return gifs
    })
}