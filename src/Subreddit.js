import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports


import './App.css';

 const Subreddit =  ({title, subreddit, post, image, link}) =>{


    return(

  <div className="items">
    <div className= "subitem">
<h1 className="subtitle">{title}</h1>
<h2 className="subreddit">Subreddit: {subreddit}</h2>
<p className="subpost">{post}</p>

<img className="subimg" src={image}></img>
<button className="bttn-unite bttn-md bttn-primary"><a className="buttontext" href={link}>Learn More</a></button>


{/* <a className="subsite" href="">{url}</a> */}
</div>
</div>


    );
 }
 
 export default Subreddit;