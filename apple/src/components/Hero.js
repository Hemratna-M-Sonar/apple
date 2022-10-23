import React from 'react';
import "../Style/hero.css";
const Hero = (props) => {
  return (
    <>
        <div className="main">
                <h2 className="title" style={{color: props.color}}>{props.title}</h2>
                <h3 className="subTitle" style={{color: props.color}}>{props.subTitle}{props.isSubImage ? <span><img src={props.subpath} alt=""/></span> : null}</h3>
                <p className="msg">{props.text}</p>
                <div className="buttons">
                    <a href={props.learnMore}>Learn More &gt; </a> 
                    <a href={props.orderNow}>Order Now &gt; </a>
                </div>
        </div>
    </>
  )
}

export default Hero;