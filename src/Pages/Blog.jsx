import React from 'react'
import BlogBanner from '../Components/BlogBanner/BlogBanner'
import CommonSideBar from '../Commons/CommonSideBar'

const Blog = () => {
    return (
        <>
            <div className='absolute -rotate-90 left-[-409px] top-[499px]'>
                <CommonSideBar commonSideBarNumber={"5.0"} commonSideBarTitle={"FROM THE BLOG"} />
            </div>
            <BlogBanner />
        </>
    )
}

export default Blog