import React from 'react'
import HomeBanner from '../Components/HomeBanner/HomeBanner'
import CommonSideBar from '../Commons/CommonSideBar'

const Home = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"1.0"} commonSideBarTitle={"MY NAME IS ROBERT"}/>
            </div>
            <HomeBanner />
        </>
    )
}

export default Home