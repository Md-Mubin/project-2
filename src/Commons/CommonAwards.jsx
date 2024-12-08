import React from 'react'

const CommonAwards = ({commonAwardsInfo, commonAwardsName, commonAwardsStyle}) => {
    return (
        <>
            <ul className={`w-[1199px] flex items-center py-[42px] pl-[75px] text-brandColors font-helvetica ${commonAwardsStyle}`}>
                <li className='w-[85px] h-[85px] bg-[#c4c4c4]'></li>
                <li className='ml-[57px] mr-[108px] w-[309px] text-[22px] leading-[130%]'>{commonAwardsName}</li>
                <li className='w-[380px] text-[15px] leading-[130%]'>{commonAwardsInfo}</li>
            </ul>
        </>
    )
}

export default CommonAwards