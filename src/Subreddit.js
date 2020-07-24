import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports


import './App.css';

 const Subreddit =  ({title, subreddit, post, image}) =>{


    return(

  <div className="items">
    <div className= "subitem">
<h1 className="subtitle">{title}</h1>
<h2 className="subreddit">{subreddit}</h2>
<p className="subpost">{post}</p>

<img className="subimg" src={image}></img>


{/* <a className="subsite" href="">{url}</a> */}
</div>
</div>


    );
 }
 
 export default Subreddit;