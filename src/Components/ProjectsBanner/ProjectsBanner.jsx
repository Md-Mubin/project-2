import React from 'react'
import './ProjectsBanner.css'
import CommonButton from '../../Commons/CommonButton'

const ProjectsBanner = () => {
    return (
        <>
            <section className='projectsSection'>
                <ul className="projectsInfo">
                    <h1>PROJECTS</h1>
                    <ul className='projectsBar'>
                        <button>BERLING AGENCY WEBSITE</button>
                        <button>PRETTYLITLETHING AMERICAN SHOP</button>
                        <button>BENHOME - ARCHITECTURE THEME</button>
                        <button>GILHOUSE - ARCHITECTURE WEBSITE</button>
                        <button>GILBER - PERSONAL WEBSITE</button>
                        <button className='border-b'>JONNY - PERSONAL WEBSITE</button>
                    </ul>
                    <CommonButton commonButtonStyle={"mt-[75px] mr-[39px]"} commonButtonInfo={"View all works"}/>
                </ul>
                <ul className='projectsImages'>
                    <li className='w-[1093px] h-[847px] bg-[#c4c4c4]'></li>
                </ul>
            </section>
        </>
    )
}

export default ProjectsBanner