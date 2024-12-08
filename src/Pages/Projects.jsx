import React from 'react'
import CommonSideBar from '../Commons/CommonSideBar'
import ProjectsBanner from '../Components/ProjectsBanner/ProjectsBanner'

const Projects = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"2.0"} commonSideBarTitle={"PORTFOLIO"}/>
            </div>
            <ProjectsBanner />
        </>
    )
}

export default Projects