
import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContextProvider";
import LoginServices from "../services/LoginServices/login"
import addFav from '../services/addFav'
export default function useUser(){
    const {favs,jwt,setFavs, setJWT} = useContext(Context)
    const [state, setState] = useState({loading:false, error:false})
    
    const login = useCallback(({username, password}) => {
        setState({loading:true, error:false})
        LoginServices({username, password})
        .then(jwt => {
            setState({loading:false, error:true})
            window.sessionStorage.setItem('jwt',jwt)
            setJWT(jwt)
        })
        .catch(err =>{
            setState({loading:false, error:true})
            window.sessionStorage.removeItem('jwt')
            console.error(err)
        })
    },[setJWT])

    const fav = useCallback(({id})=>{
        addFav({id,jwt})
        .then(favs => setFavs(favs) )
        .catch(er => console.log(er))
    },[]) 

    console.log(jwt)

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    return{
        fav,
        favs,
        isLogged : Boolean(jwt),
        isLoginLoading:state.loading,
        isLoginError: state.error,
        login, 
        logout
    }//recuperar valores globales de auth
}