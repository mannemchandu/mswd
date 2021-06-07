import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);



  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Find countries</h2>
      <input value={filter} onChange={handleChange}/>
          <Search countries={countries} filter={filter} />
    </div>
  )
}

export default App;
