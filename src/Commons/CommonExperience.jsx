import React from 'react'

const CommonExperience = ({commonExperienceInfo, commonExperienceName, commonExperienceStyle, commonExperienceIcon, commonExperienceYear}) => {
    return (
        <>
            <ul className={`flex  items-center py-[42px] pl-[75px] text-brandColors font-helvetica ${commonExperienceStyle}`}>
                <li className='text-brandColors text-[60px]'>{commonExperienceIcon}</li>
                <li className='ml-[104px] mr-[187px] text-[22px] leading-[130%] flex flex-col'><span className='font-normal text-[15px] opacity-50'>{commonExperienceYear}</span>{commonExperienceName}</li>
                <li className='w-[380px] text-[15px] leading-[130%]'>{commonExperienceInfo}</li>
            </ul>
        </>
    )
}

export default CommonExperience