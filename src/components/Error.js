import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from '../assets/images/error-1.jpg'
import { Link } from 'gatsby'
import './Hero.css'

function Error() {
    return (
        <HeroContainer>
            <HeroBg>
                <Img src={Image}/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>404: Not Found</HeroH1>
                    <HeroP>The page you are looking for no longer exists. Click <Link to='/' style={{ textDecoration: 'none', color: '#F26A2E' }}>here</Link> to go to the home page.</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Error
