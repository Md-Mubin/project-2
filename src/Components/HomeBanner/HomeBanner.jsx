import React from 'react'
import './HomeBanner.css'
import { FaArrowRightLong } from 'react-icons/fa6'
import CommonCounter from '../../Commons/CommonCounter'
import CommonButton from '../../Commons/CommonButton'

const HomeBanner = () => {
    return (
        <>
            <section className='homeBannerSection'>

                <ul className='homeBanerInfo'>
                    <h1>GET <span>YOUR</span></h1>
                    <li>Always available for freelance work, contact me and get your greate design ;) </li>
                    <h2>GREAT <br /><span>DESIGN</span></h2>
                    <p>Hello, my name is Pattison and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
                    <CommonButton commonButtonInfo={"(hire me :)"} commonButtonStyle={"mt-[105px]"}/>

                    <li className='homeCounters'>
                        <CommonCounter commonCounter={8} commonCounterName={"Years Experience"}/>
                        <CommonCounter commonCounter={5} commonCounterName={"Themeforest awwards"}/>
                        <CommonCounter commonCounter={60} commonCounterName={"Projects Done"}/>
                    </li>
                </ul>
                <ul className='homeBannerGrid'>
                    <img src="images/homeBannerGrid.png" alt="grid_image" className='h-[902px] w-[1200px]' />
                    <div className="images">
                        <img src="images/whiteRound.png" alt="images"  className='mr-[-125px]'/>
                        <img src="images/blackRound.png" alt="images" />
                    </div>
                </ul>
            </section>
        </>
    )
}

export default HomeBanner