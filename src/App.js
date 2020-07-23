import React, { useEffect, useState, Component } from 'react'
// get our fontawesome imports
import Logo from './assets/reddit.png';


import './App.css'
import Subreddit from './Subreddit.js'

const App = () => {
  const [subs, setSubs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('dogs');
  

  useEffect(() => {
    getSubs();
  }, [query])

  const getSubs = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`)
   

    
    const data = await response.json();
    console.log(data.data.children);

    setSubs(data.data.children); // Because, children is the Array data you are looking for
    // setSubs(prevSubs => prevSubs.concat(data.data.children)) // Use this setState with function argument if you want to concat API response with previous state data
  }


  const updateSearch = e => {
setSearch(e.target.value);
console.log(search);
  };

  const getSearch = e => {
e.preventDefault();
setQuery(search);

  }

  
  
  return (
    <div className="App">
      
      <h1 className="header">
        Reddit  <img className="reddit" src={Logo}></img>
      </h1>

      <form className="searchform" onSubmit={getSearch}>
        <input type="text" className="searchbar" value={search} onChange={updateSearch}></input>
        <button type="submit" className="button">Search</button>
      </form>

      {subs && subs.map((subs) => 
       

        <Subreddit
        title={subs.data.title}
        subreddit={subs.data.subreddit}
        post={subs.data.selftext}
        url={subs.data.url}
     
        />
        
      
      )}
         
    </div>
  )
}

export default App;