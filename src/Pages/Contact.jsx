import React from 'react'
import CommonSideBar from '../Commons/CommonSideBar'
import ContactBanner from '../Components/ContactBanner/ContactBanner'

const Contact = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"6.0"} commonSideBarTitle={"CONTACT"} />
            </div>
            <ContactBanner/>
        </>
    )
}

export default Contact