import React from 'react'
import './ExperienceBanner.css'
import CommonExperience from '../../Commons/CommonExperience'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoLogoBehance } from 'react-icons/io5'

const ExperienceBanner = () => {
    return (
        <>
            <section className='experienceSection'>
                <ul className='experienceHead'>
                    <h1>EDUCATION <span>&</span></h1>
                    <li>Professional awards I've reached during my working times.</li>
                    <h2>EXPERIENCE</h2>
                    <p>I have been developing sites for 8 years and I know for sure the main trends and directions of modern design, you will get a decent result</p>
                    <button>RESUME</button>
                </ul>
                <ul className='allExperience'>
                    <CommonExperience commonExperienceIcon={<FaFacebook/>} commonExperienceYear={"2019-2021"} commonExperienceName={"FACEBOOK"} commonExperienceInfo={"Assertively exploit wireless initiatives rather than synergistic core competencies."} commonExperienceStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
                    <CommonExperience commonExperienceIcon={<IoLogoBehance/>} commonExperienceYear={"2017-2019"} commonExperienceName={"BEHANCE"} commonExperienceInfo={" im working via developer 9 years and i know all about design"} commonExperienceStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
                    <CommonExperience commonExperienceIcon={<FaTwitter/>} commonExperienceYear={"2014-2017"} commonExperienceName={"TWITTER"} commonExperienceInfo={"Credibly streamline mission-critical value with multifunctional functionalities. Leading team designers."} commonExperienceStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
                    <CommonExperience commonExperienceIcon={<FaInstagram/>} commonExperienceYear={"2012-2014"} commonExperienceName={"INSTAGRAMM"} commonExperienceInfo={"Proven ability to lead and manage a wide variety of design and development projects in team and independent situations."} commonExperienceStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
                    <CommonExperience commonExperienceIcon={<FaLinkedin/>} commonExperienceYear={"206-2012"} commonExperienceName={"LINKEDIN"} commonExperienceInfo={"Assertively exploit wireless initiatives rather than synergistic core competencies."}/>
                </ul>
            </section>
        </>
    )
}

export default ExperienceBanner