import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Image from '../assets/images/error-1.jpg'
import { Link } from 'gatsby'

function Error() {
    return (
        <ErrorContainer>
            <ErrorBg>
                <Img src={Image}/>
            </ErrorBg>
            <ErrorContent>
                <ErrorItems>
                    <ErrorH1>404: Not Found</ErrorH1>
                    <ErrorP>The page you are looking for no longer exists. Click <Link to='/' style={{ textDecoration: 'none', color: '#F26A2E' }}>here</Link> to go to the home page.</ErrorP>
                </ErrorItems>
            </ErrorContent>
        </ErrorContainer>
    )
}

export default Error

const ErrorContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 100%
        )
    }
`

const ErrorBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const ErrorContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const ErrorItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const ErrorH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const ErrorP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`


