import React from 'react'
import './AwardsBanner.css'
import CommonButton from '../../Commons/CommonButton'
import CommonAwards from '../../Commons/CommonAwards'

const AwardsBanner = () => {
  return (
    <>
      <section className='awardsSection'>
        <ul className='awardsInfo'>
          <h1>EXPLORE <span>MY</span></h1>
          <li>I love my work and every project is my price</li>
          <h2>PROFILE</h2>
          <p>Hello, my name is Pavel Suslov and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
          <CommonButton commonButtonInfo={"View behance"} commonButtonStyle={"mt-[105px]"}/>
        </ul>
        <ul className='allAwards'>
          <h2>Professional <span>awards</span></h2>
          <ul className='awardsCart w-full'>
            <CommonAwards commonAwardsName={"1ST WINNER CREATIVE DESIGN CHAMPIONSHIP"} commonAwardsInfo={"For most favorited design voted by NY City Style customers"} commonAwardsStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
            <CommonAwards commonAwardsName={"BEST 5 BRANDING PROJECT OF NOMINATIONS"} commonAwardsInfo={"For best creative & usable health care mobile app design"} commonAwardsStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
            <CommonAwards commonAwardsName={"8 Years of Membership"} commonAwardsInfo={"Has been part of the Envato Community for over 8 years"} commonAwardsStyle={"border-b border-[#E2DCC8] border-opacity-30"}/>
            <CommonAwards commonAwardsName={"Exclusive Author"} commonAwardsInfo={"Sells items exclusively on Envato Market"}/>
          </ul>
        </ul>
      </section>
    </>
  )
}

export default AwardsBanner