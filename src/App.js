import React, { useEffect, useState, Component } from 'react'
// get our fontawesome imports
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import Subreddit from './Subreddit.js'

const App = () => {
  const [subs, setSubs] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = "dogs";

  useEffect(() => {
    getSubs();
  }, [query])

  const getSubs = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`)
   

    
    const data = await response.json();
    console.log(data.data.children);

    setSubs(data.data.children.data); // Because, children is the Array data you are looking for
    // setSubs(prevSubs => prevSubs.concat(data.data.children)) // Use this setState with function argument if you want to concat API response with previous state data
  }

  return (
    <div className="App">
      <h1 className="header">
        Reddit <i className="fa fa-reddit"></i>
      </h1>

      <form>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>

      {subs && subs.map((subs) => 
       
        <Subreddit
        title={subs.title.data}
        subreddit={subs.subreddit}
        post={subs.selftext}
        url={subs.data.url}
     
        />
      
      )}
         
    </div>
  )
}

export default App;