
import React, {useEffect, useState} from 'react'; 
import './App.css';
import Gif from './components/Gif';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs'
import {Link, Route, useLocation } from "wouter";
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/gifsContext';

const GIFS = ['https://media2.giphy.com/media/xT1XGVp95GDPgFYmUE/giphy.gif?cid=ecf05e4772rhouexuf4nmnljthqqbep7k0sddw73rgvsh5vb&rid=giphy.gif&ct=g'
  ,'https://media3.giphy.com/media/r1IMdmkhUcpzy/giphy.gif?cid=ecf05e4771fbv0xnlcidkymcmql25ic9xlynbs8lxpqx5uni&rid=giphy.gif&ct=g']

  const diffrentGIFS = ['https://media4.giphy.com/media/dtVFLfrmSqi1MIyaJE/giphy.gif',
  'https://media4.giphy.com/media/UYOMzpcC9pcOI/giphy.gif']

const apiUrl = ['https://api.giphy.com/v1/gifs/search?api_key=5El953it319EnsvYVOm9Wk4AWGjZanb1&q=colombia&limit=25&offset=0&rating=g&lang=en']


function App() { 
  //  const [keyword, setKeyword] = useState('Colombia')

  return (
    <StaticContext.Provider value = {{name:'midudev', suscribiteAlCanal:true}}> 
    <div className="App">
      
      <section className="App-content">
        
        <Link to = '/'>
          <img className="App-logo"src='k.png'/>
        </Link>
        
        <GifsContextProvider>

        <Route path ='/' component = {Home}/>
        
        <Route path='/search/:keyword' component= {SearchResults}/>

        <Route path='/gif/:id' component={Detail} />
        
        </GifsContextProvider>
       
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
