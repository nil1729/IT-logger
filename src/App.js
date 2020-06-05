import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/layouts/AddLogModal';
import EditLogModal from './components/layouts/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {

  useEffect(()=>{
    M.AutoInit(); 
  });

  return (
    <Provider store={store}>
    <>
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <Logs/>
        <EditLogModal/>
        <AddLogModal/>
        <AddTechModal/>
        <TechListModal/>    
      </div>
    </>
    </Provider>
  )
}

export default App;
