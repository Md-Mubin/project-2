import React from 'react'
import './TestimonialsBanner.css'
import CommonButton from '../../Commons/CommonButton'

const TestimonialsBanner = () => {
    return (
        <>
            <section className='testimonialSection'>
                <img src="images/testimonialsBanner.png" alt="testimonialsBanner_backgroundImage" className='testimonial_extrabg' />
                <ul className='testimonialsHead'>
                    <h1>+250</h1>
                    <li>I love my work and every project is my pride </li>
                    <h2>HAPPY <br /> <span>CLIENTS</span></h2>
                    <ul className='testimonialsLogo'>
                        <li><img src="images/testimonialLogo1.png" alt="logos_images" /></li>
                        <li><img src="images/testimonialLogo2.png" alt="logos_images" /></li>
                        <li><img src="images/testimonialLogo3.png" alt="logos_images" /></li>
                        <li><img src="images/testimonialLogo4.png" alt="logos_images" /></li>
                    </ul>
                </ul>
                <ul className='testimonialInfo'>
                    <h2><span>Creative</span> & dedicated is things that my studio brings for your business</h2>
                    <li className='testimonialReviews'>
                        <img src="images/testimonialsSmallImage.png" alt="testimonialsSmallImage" />
                        <p>“ If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Bauhaus Studio is perfect.</p>
                    </li>
                    <h5>DAVID & ELISA</h5>
                    <h6>Apartment view lake at Brooklyn</h6>

                    <li className='testimonialButton'>
                        <CommonButton/>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default TestimonialsBanner