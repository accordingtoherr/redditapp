import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports
import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import Subreddit from './Subreddit.js';



const App = () => {

  const [subs, setSubs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('')

  useEffect (() => {
getSubs();

    }, [query]);




  const getSubs = async () => {
    const response = await fetch(`https://www.reddit.com/r/${query}.json`);
    const data = await response.json();
    console.log(data);
    setSubs(subs.data);



    }






  return (
    <div className="App">
     <h1 className="header">Reddit  <i className="fa fa-reddit"></i> </h1>

     <form>
        <input type="text" ></input>
        <button type="submit">Search</button>
     </form>




{subs.map(subs =>


  (<Subreddit

    title={subs.children.name}
  subreddit={subs.children.subreddit}
post={subs.children.data.selftext}
url={subs.children.data.url}
  /> )) }

      </div>

    );
  };








export default App;
