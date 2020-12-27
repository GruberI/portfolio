import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';

// const ScrollLink = Scroll.ScrollLink

const Navbar = () => {

   const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return (
        <nav>
            <div className="nav-content">
            
                <ul className="nav-items">
                    <li className="nav-item" onClick={scrollToTop}>
                        Welcome
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                            Portfolio
                        </Link>
                        </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >
                            Contact
                        </Link>
                    </li>
                </ul>
            
            </div>
        </nav>
    )
}

export default Navbar;