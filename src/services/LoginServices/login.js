const ENDPOINT = 'http://localhost:8001'

export default function login ({username, password}){
    return fetch (`${ENDPOINT}/api/login`,{
           
           method: 'POST',
           headers: {
            //'Accept': 'application/json',
            
            'Content-type': 'application/json',
          },
           body:JSON.stringify({username, password})
            }).then(res => {
                if(!res.ok) throw new Error('Response is NOT ok')
                return res.json()
            }).then(res =>{
                const {jwtValue} = res
                return jwtValue
            })
}