import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'gatsby';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { menuData } from '../data/MenuData';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={click ? 'navbar active' : 'navbar'}>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              EXPLORIX
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {menuData.map((item, index) => (
                <li className='nav-item'>
                <Link key={index} to={item.link} className='nav-links' onClick={closeMobileMenu}>
                  {item.title}
                </Link>
              </li>
        ))}
              
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                    <Button primary='true' round='true' buttonStyle='btn--outline'>Book a Flight</Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                    <Button
                      primary='true' round='true'
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Book a Flight
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;


