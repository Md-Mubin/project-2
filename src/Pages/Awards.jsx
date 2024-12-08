import React from 'react'
import CommonSideBar from '../Commons/CommonSideBar'
import AwardsBanner from '../Components/AwardsBanner/AwardsBanner'

const Awards = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"3.0"} commonSideBarTitle={"MY AWWARDS"} />
            </div>
            <AwardsBanner/>
        </>
    )
}

export default Awards