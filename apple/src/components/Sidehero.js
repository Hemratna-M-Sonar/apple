import React from 'react';
import "../Style/sidehero.css";
const Hero = (props) => {
  return (
    <>
        <div className="main">
                <h2 className="titlemini" style={{color: props.color,zIndex:"10"}}>{props.title}</h2>
                <span style={{color:props.extraColor, fontSize:"0.85rem", margin: "-0.3rem 0 0.5rem 0", fontWeight:"600", letterSpacing:"1px", zIndex:"100"}}>{props.isSpan ? props.extra : ""}</span>
                <h3 className="subTitlemini" style={{color: props.color}}>{props.subTitle}</h3>
                <div className="buttons">
                    <a className="amini" href={props.learnMore}>Learn More &gt; </a> 
                    <a className="amini" href={props.orderNow}>Order Now &gt; </a>
                </div>
        </div>
    </>
  )
}

export default Hero;