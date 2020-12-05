import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from '../assets/images/error-1.jpg'
import { Link } from 'gatsby'
import './Hero.css'

function Error() {
    return (
        <div className='HeroContainer'>
            <div className='HeroBg'>
                <Img src={Image}/>
            </div>
            <div className='HeroContent'>
                <div className='HeroItems'>
                    <h1 className='HeroH1'>404: Not Found</h1>
                    <p className='HeroP'>The page you are looking for no longer exists. Click <Link to='/' style={{ textDecoration: 'none', color: '#F26A2E' }}>here</Link> to go to the home page.</p>
                </div>
            </div>
        </div>
    )
}

export default Error
