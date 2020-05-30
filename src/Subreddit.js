import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports


import './App.css';

 const Subreddit =  ({title, subreddit, post, url}) =>{


    return(

  <div>     
<h1>{title}</h1>
<h2>{subreddit}</h2>
<p>{post}</p>
<a href="">{url}</a>
</div>

    );
 }
 
 export default Subreddit;