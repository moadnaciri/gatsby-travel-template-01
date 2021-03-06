import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/travel-3.mp4'
import './Hero.css'
import { Link } from 'gatsby'


function Hero() {
    return (
        <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' src={Video} type='video/mp4' autoPlay loop muted playsInline />
            </div>
            <div className='HeroContent'>
                <div className='HeroItems'>
                    <h1 className='HeroH1'>Unreal Destinations</h1>
                    <p className='HeroP'>Out of this world</p>
                    <Link className='Button' to='/trips'>Travel Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero



