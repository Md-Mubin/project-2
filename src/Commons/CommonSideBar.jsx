import React from 'react'

const CommonSideBar = ({commonSideBarTitle, commonSideBarNumber}) => {
    return (
        <>
            <ul className='flex justify-between py-[25px] pl-[32px] pr-[37px] font-helvetica font-normal text-[38px] text-brandColors border-b border-opacity-30 border-[#E6E3D9] w-[900px] leading-[85%]'>
                <li>{commonSideBarTitle}</li>
                <li>{commonSideBarNumber}</li>
            </ul>
        </>
    )
}

export default CommonSideBar