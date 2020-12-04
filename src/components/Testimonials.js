import React, { useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimonials() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                name: {in: ["testimonial-1", "testimonial-2"]}}) {
                edges {
                node {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
        }
    `)
    return (
        <TestimonialsContainer>
            <TopLine data-aos="fade-right">Testimonials</TopLine> 
            <Description data-aos="fade-right">
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial data-aos="fade-up-right">
                        <IoMdCheckmarkCircleOutline style={{
                            color: '#3fffa8',
                            fontSize: '2rem',
                            marginBottom: '1rem'
                        }} />
                        <h3>Jhon Smith</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit nulla repellendus molestias vitae. Accusamus pariatur animi quos consectetur aut."</p>
                    </Testimonial>
                    <Testimonial data-aos="fade-right">
                        <FaRegLightbulb style={{
                            color: '#f9b19b',
                            fontSize: '2rem',
                            marginBottom: '1rem'
                        }} />
                        <h3>Sarah Bow</h3>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit nulla repellendus molestias vitae. Accusamus pariatur animi quos consectetur aut."</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <div data-aos="zoom-in">
                    <Images key={key} fluid={image.node.childImageSharp.fluid}  />
                    </div>
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`

const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`