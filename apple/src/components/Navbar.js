import React, {useState} from 'react';
import "../Style/navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [closeBtn, setCloseBtn] = useState(false);
    const [overlayBtn, setOverlayBtn] = useState(false);

  return (
    <>
        <div className={toggle ? "nav-container active" : "nav-container"}>
        <nav className={searchBar ? "move-up" : ""}>
            <ul className="mobile-nav">
                <li>
                    <div className="menu-icon-container" onClick={() => setToggle(!toggle)}>
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="#" className="link-logo"></a>
                </li>

                <li>
                    <a href="" className="link-bag"></a>
                </li>
            </ul>

            <ul className={searchBar ? "desktop-nav hide move-down active" : "desktop-nav"}>
                <li>
                    <a href="#" className="link-logo"></a>
                </li>
                <li>
                    <a href="#">Store</a>
                </li>
                <li>
                    <a href="#">Mac</a>
                </li>
                <li>
                    <a href="#">iPad</a>
                </li>
                <li>
                    <a href="#">iPhone</a>
                </li>
                <li>
                    <a href="#">Watch</a>
                </li>
                <li>
                    <a href="#">Airpods</a>
                </li>
                <li>
                    <a href="#">TV and Home</a>
                </li>
                <li>
                    <a href="#">Only on Apple</a>
                </li>
                <li>
                    <a href="#">Accessories</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#" className="link-search" onClick={() => {setSearchBar(!searchBar); setCloseBtn(!searchBar)}}></a>
                </li>
                <li>
                    <a href="#" className="link-bag"></a>
                </li>
            </ul>
        </nav>

        {/*  End of navigation menu items */}

        <div className={closeBtn ? "search-container" : "search-container hide"}>
            <div className="link-search"></div>
            <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com" />
                </form>
            </div>
            <div className="link-close" onClick={() => {setCloseBtn(!closeBtn); setSearchBar(!closeBtn)}}></div>

            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div>
        </div>


        <div className="mobile-search-container">
            <div className="link-search"></div>
            <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com" />
                </form>
            </div>
            <span className="cancel-btn">Cancel</span>

            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div>
        </div>
        

    </div>


    <div onClick={() => {setOverlayBtn(!overlayBtn)}} className={searchBar ? "overlay show" : "overlay"}></div>
    
    </>
  )
}

export default Navbar;