import React from 'react'
import './Navbar.css'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className='pageP'>
                    <li>P</li>
                </ul>

                <ul className='navSocials'>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                </ul>
                <div className='navItemsRow'>
                    <ul className='navItems'>
                        <Link to={"/"}>HOME</Link>
                        <Link to={"/projects"}>PROJECTS</Link>
                        <Link to={"/awards"}>AWARDS</Link>
                        <Link to={"/testimonials"}>TESTIMONIALS</Link>
                        <Link to={"/experience"}>Experience</Link>
                        <Link to={"/blog"}>BLOG</Link>
                        <Link to={"/contact"}>CONTACT</Link>
                    </ul>
                    <ul className='numberNav'>
                        <li>+2(315) 590 83 68</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar