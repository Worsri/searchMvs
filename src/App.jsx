import { useState, useEffect } from 'react'
import axios from 'axios';

import Result from './components/Result'

function App() {
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=99ac35adad30eefa771c02553d75d552&page=1";
    

  const [mvs, setMvs] = useState([]);
  const [search, setSearch] = useState("")

  const searchOnChange = (e) => {
    console.log(e.target);
  }
  const getAllMvs = () => {
    axios.get(APIURL)
      .then((response) => {
      console.log(response.data.results);
      setMvs(response.data.results);
      }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => { 
    if (search === "") {
      
      getAllMvs();
    } else {
      // getAllSearchedMvs();
    }
    
  }, [search]);
  return (
    <>
      <div>
        {" "}
        <input type="search" value={search} onChange={searchOnChange} />
        <Result mvs={mvs} />
      </div>
    </>
  );
}

export default App
