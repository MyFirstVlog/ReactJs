import React from 'react'; 
import ListOfGifs from '../../components/ListOfGifs';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs'


export default function SearchResults({params}){
    const {keyword} = params   
    const {loading, gifs, setPage, page} = useGifs({keyword}) //custom hooks, logica que qeuremos reutiliazr 

    const handleNextPage = () => {
          setPage(prevPage => prevPage + 1)
    }
     
    /*console.log('este es: ', keyword)
    const [gifs, setGifs ] = useGifs({keyword})

    useEffect(function(){
        setLoading(true)
        console.log('efecto ejecutado')
        getGifs({keyword})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)    
        })
        //setGifs(diffrentGIFS)    
        
      },[keyword])*/
    

    return <>
            {
                loading ? <Spinner/> :<> 
                <ListOfGifs gifs = {gifs} /> 
                <button onClick = {handleNextPage}>Get next Page </button>
                </> 
            }
        </>
}
/* <>
import Spinner from '../../components/'
        {
            loading ? <Spinner /> : <ListOfGifs gifs = {gifs} />
        }
    </> 
    
    gifs.map((eachOne)=>
         <Gif 
         key = {eachOne.id}
         title = {eachOne.title} 
         url = {eachOne.url} 
         id = {eachOne.id}/>//si fuera solo una linea no toca poner el return pero como es multiple html es obligatorio)
         )
    
    
    */