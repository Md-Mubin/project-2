import React from 'react'
import ExperienceBanner from '../Components/ExperienceBanner/ExperienceBanner'
import CommonSideBar from '../Commons/CommonSideBar'

const Experience = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"5.0"} commonSideBarTitle={"WORKING EXPERIENCE"} />
            </div>
            <ExperienceBanner/>
        </>
    )
}

export default Experience