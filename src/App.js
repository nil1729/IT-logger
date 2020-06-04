import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';


const App = () => {

  useEffect(()=>{
    M.AutoInit();
  });

  return (
    <>
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <Logs/>       
      </div>
    </>
  )
}

export default App;
