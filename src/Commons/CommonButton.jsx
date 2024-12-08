import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CommonButton = ({commonButtonInfo, commonButtonStyle}) => {
    return (
        <>
            <li className={`flex items-center justify-end gap-[27px] text-brandColors ${commonButtonStyle}`}>
                {commonButtonInfo}
                <button className='w-[109px] h-[69px] bg-[#B66449] rounded-full flex justify-center items-center hover:scale-110 duration-200 will-change-transform'><FaArrowRightLong className='text-3xl text-brandColors ' /></button>
            </li>
        </>
    )
}

export default CommonButton