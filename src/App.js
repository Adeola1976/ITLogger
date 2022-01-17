import React, {useEffect} from 'react';
import SearchBar from './components/layouts/SearchBar'
import Logs from './components/logs/Logs'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect (() => {
      M.AutoInit();
  })
  return (
    <>
       <SearchBar/>
       <div className="container">
             <Logs/>
       </div>
    </>
  );
}

export default App;
