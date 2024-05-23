import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import './index.css';

const Header = () => {
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-bar">
            <div className="icon-name">
                <h2 className="indigo">IndigoLearn</h2>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>

        <div className='toggle-clr'>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li className='list-font'>Buy Courses</li>
                <li className='list-font'>Programs</li>
                <li className='list-font'>Free Resources</li>
            </ul>
            </div>

            <div className="btn-div">
                <button className="btn-cls" type="button">
                    <CgProfile /> LOGIN/SIGNUP
                </button>
            </div>
        </nav>
    );
};

export default Header;
