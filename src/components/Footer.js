import React from 'react'
//import styled from 'styled-components'
import { Link } from 'gatsby'
import './Footer.css'

function Footer() {
    return (
        <div className='FooterContainer'>
            <div className='FooterLinksWrapper'>
                <div className='FooterDesc'>
                    <h1>Explorix</h1>
                    <p>We strive to create the best experiences for our customers</p>
                </div>
                <div className='FooterLinkItems'>
                    <h2 className='FooterLinkTitle'>
                        Contact Us
                    </h2>
                    <Link className='FooterLink' to='/about'>
                        Contact
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Support
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Destinations
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Sponsorships
                    </Link>
                </div>
            </div>

            <div className='FooterLinksWrapper'>
                <div className='FooterLinkItems'>
                    <h2 className='FooterLinkTitle'>
                        Videos
                    </h2>
                    <Link className='FooterLink' to='/about'>
                        Submit Video
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Ambassadors
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Agency
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Influencer
                    </Link>
                </div>

                <div className='FooterLinkItems'>
                    <h2 className='FooterLinkTitle'>
                        Social Media
                    </h2>
                    <Link className='FooterLink' to='/about'>
                        Instagram
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Facebook
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Youtube
                    </Link>
                    <Link className='FooterLink' to='/'>
                        Twitter
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer

