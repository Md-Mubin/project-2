import React from 'react'

const CommonCounter = ({commonCounter, commonCounterName}) => {
    return (
        <>
            <ul className='w-[150px] font-helvetica text-brandColors flex items-center gap-[26px]'>
                <li className='font-medium text-[74px]'>{commonCounter}</li>
                <li className='font-normal text-[15px]'>{commonCounterName}</li>
            </ul>
        </>
    )
}

export default CommonCounter