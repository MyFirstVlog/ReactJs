const ENDPOINT = 'http://localhost:8001'

export default function getFavs ({ jwt}){
    return fetch (`${ENDPOINT}/favs`,{           
           method: 'GET',
           headers: {           
            //'Accept': 'application/json',
            'Content-type': 'application/json'
          },          
            }).then(res => {
                if(!res.ok) throw new Error('Response is NOT ok')
                return res.json()
            }).then(res =>{
                const {favs} = res
                return favs
            })
}