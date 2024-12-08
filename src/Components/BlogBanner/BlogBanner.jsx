import React from 'react'
import './BlogBanner.css'
import CommonButton from '../../Commons/CommonButton'

const BlogBanner = () => {
    return (
        <>
            <section className='blogSection'>
                <ul className='blogHead'>
                    <h1>LATEST</h1>
                    <li>I love my work and every project is my pride </li>
                    <h2>NEWS</h2>

                    <ul className='blogBars'>
                        <button>HOW TO DESIGN WELL</button>
                        <button>LEMON ILLUSTRATION DESIGN</button>
                        <button>PAUL THEME BRANDING</button>
                        <button>BEST TYPOGRAPHY 2020</button>
                        <button className='border-b'>MY NAME IS PATTISON</button>
                    </ul>

                    <CommonButton commonButtonInfo={"View all works"} commonButtonStyle={"mt-[75px] mr-[20px]"}/>
                </ul>
                <ul className='blogPart'>
                    <li className='blogMian'>
                        <h4>3th January, 2020</h4>
                        <p>Berling ® —  minimalism photography agency website. with the help of a  minimalistic design, the site turned out to be very  user-friendly  and responsive, and the brand became more.</p>
                    </li>
                    <li className='blogImages'>

                    </li>
                </ul>
            </section>
        </>
    )
}

export default BlogBanner