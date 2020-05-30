import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports


import './App.css';

 const Subreddit =  ({title, subreddit, post, url}) =>{


    return(

  <div className="items">     
<h1 className="subtitle">{title}</h1>
<h2 className="subreddit">{subreddit}</h2>
<p className="subpost">{post}</p>
<a className="subsite" href="">{url}</a>
</div>

    );
 }
 
 export default Subreddit;