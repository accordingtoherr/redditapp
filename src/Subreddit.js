import React, {useEffect, useState, Component} from 'react';
// get our fontawesome imports


import './App.css';

 const Subreddit =  ({title, subreddit, post, image, link}) =>{


    return(

  <div className="items">
    <div className= "subitem">
<h1 className="subtitle">{title}</h1>
<img className="subimg"  src={image} />
<h2 className="subreddit">Subreddit: {subreddit}</h2>
<p className="subpost">{post}</p>

  {/* {props.localFile ? <Img fluid={props.localFile.childImageSharp.fluid} alt={name} /> : <img src="default image" />} */}


<a className="myButton" add target="_blank" href={link}>Learn More</a>


{/* <a className="subsite" href="">{url}</a> */}
</div>
</div>


    );
 }
 
 export default Subreddit;