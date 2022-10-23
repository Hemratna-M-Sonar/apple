import React from 'react';
import Hero from "./Hero";
import Sidehero from "./Sidehero";
import "../Style/homepage.css";
import subImg from "../Style/m2chip.png";
const Homepage = () => {
  return (
    <>
        <div className="wrapper">
            <a href="#" className="ipad-page commonsize">
                <div className="ipad-box">
                    <Hero
                        title="iPad"
                        subTitle="Lovable. Drawable. Magical."
                        text="Available starting from 28 Oct."
                        learnMore="#"
                        orderNow="#"
                    />
                </div>
            </a>
            <a href="#" className='ipadPro-page commonsize'>
                <div className="ipadPro-box">
                    <Hero
                        title="iPad Pro"
                        subTitle="Supercharged by&nbsp;&nbsp;&nbsp;&nbsp;"
                        text="&nbsp;&nbsp;&nbsp;Available starting from 28 Oct.&nbsp;&nbsp;&nbsp;"
                        learnMore="#"
                        orderNow="#"
                        isSubImage="true"
                        subpath={subImg}
                        color="#fff"
                    />
                </div>
            </a>
            <a href="#" className="tv-page commonsize">
                <div className="tv-box">
                    <Hero
                        title=" Apple tv 4K"
                        subTitle="The Apple experience. Cinematic in every sense."
                        text="Available starting from 4 Nov."
                        learnMore="#"
                        orderNow="#"
                        isImage="false"
                    />
                </div>
            </a>
            <div className="side-by-side-1">
                <a href="#" className="diwali">
                    <div>
                        <h1 className="heading">Last chance<br/>to celebrate.</h1>
                        <p className="msg">Up to ₹7000 instant savings on qualifying orders across all products until 24.10.22<sup>*</sup></p>
                        <a href="#" className="shop">Shop</a>
                    </div>
                </a>
                <a href="#" className="iphone-14pro-page commonsmall">
                    
                    <div className="iphone14pro-box">
                        <Sidehero
                            title="iPhone 14 Pro"
                            subTitle="Pro. Beyond."
                            color="#fff"
                            learnMore="#"
                            orderNow="#"
                        />
                    </div>
                </a>
            </div>
            <div className="side-by-side-1">
                <a href="#" className="iphone-14-page commonsmall">
                    
                    <div className="iphone14-box">
                        <Sidehero
                            title="iPhone 14"
                            subTitle="Big and bigger."
                            color="#000"
                            learnMore="#"
                            orderNow="#"
                        />
                    </div>
                </a>
                <a href="#" className="iWatch-page commonsmall">
                    
                    <div className="iWatch-box">
                        <Sidehero
                            title="iWatch"
                            subTitle="Adventure awaits."
                            extra="ULTRA"
                            extraColor="orange"
                            isSpan="true"
                            color="#000"
                            learnMore="#"
                            orderNow="#"
                        />
                    </div>
                </a>
            </div>
            <div className="side-by-side-1">
                <a href="#" className="watchSeries-page commonsmall">
                    
                    <div className="watchSeries-box">
                        <Sidehero
                            title="iPhone 14 Pro"
                            subTitle="A healthy leap ahead."
                            extra="SERIES 8"
                            extraColor="red"
                            isSpan="true"
                            color="#fff"
                            learnMore="#"
                            orderNow="#"
                        />
                    </div>
                </a>
                <a href="#" className="airpods-page commonsmall">
                    
                    <div className="airpods-box">
                        <Sidehero
                            title="Airpods Pro"
                            subTitle="Rebuilt from the sound up."
                            color="#fff"
                            learnMore="#"
                            orderNow="#"
                        />
                    </div>
                </a>
            </div>
        </div>
    </>

  )
}

export default Homepage;