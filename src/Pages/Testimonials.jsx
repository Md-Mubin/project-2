import React from 'react'
import TestimonialsBanner from '../Components/TestimonialsBanner/TestimonialsBanner'
import CommonSideBar from '../Commons/CommonSideBar'

const Testimonials = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"4.0"} commonSideBarTitle={"TESTIMONIALS"} />
            </div>
            <TestimonialsBanner />
        </>
    )
}

export default Testimonials