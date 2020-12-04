import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import {FaBars} from "react-icons/fa"
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import { GiBlockHouse } from "react-icons/gi"

const Header = () => {
  const [button, setButton] = useState(false);
  return (
    <Nav>
      <NavLink to='/'>EXPLORIX</NavLink>
      <Bars onClick={() => setButton(!button)}/>
      {button ? (
        <NavMenuM>
        {menuData.map((item, index) => (
          <NavLinkM to={item.link} key={index}>
            {item.title}
          </NavLinkM>
        ))}
      </NavMenuM>
      ): (
          <></>
        )}
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>

      <NavBtn>
        <Button primary='true' round='true' to='/trips'>
          Book a Flight
          </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw- 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavLinkM = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 102;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavMenuM = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    background: yellow;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
