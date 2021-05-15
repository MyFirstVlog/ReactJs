const ENDPOINT = 'http://localhost:8001'

export default function login ({username, password}){
    return fetch (`${ENDPOINT}/register`,{
           
           method: 'POST',
           headers: {
            //'Accept': 'application/json',
            
            'Content-type': 'application/json',
          },
           body:JSON.stringify({username, password})
            }).then(res => {
                if(!res.ok) throw new Error('Response is NOT ok')
                return true
            })
}