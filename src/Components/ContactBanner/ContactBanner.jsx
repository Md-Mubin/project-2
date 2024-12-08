import React from 'react'
import './ContactBanner.css'
import ContactForm from '../ContactForm/ContactForm'

const ContactBanner = () => {
    return (
        <>
            <section className='contactSection'>
                <ul className='contactHead'>
                    <h1>HIRE <span>ME</span></h1>
                    <li>Enjoy coffe with me</li>

                    <div className='contactLink'>
                        <a href="#">MAIL: 000.LINCHBOX@GMAIL.COM</a>
                        <a href="#">SKYPE: MURREN8</a>
                        <a href="#">WWW.BEHANCE.NET/PAULGGOOO</a>
                        <a href="#" className='border-b'>TELEGRAM: PAUL_INC</a>
                    </div>

                    <li className='copyRight'>© Pattison 2021.  All Rights Resevered</li>
                </ul>
                <ul className='contactPart'>
                    <h3>Let's grab a coffee and jump on <span>conversation</span> chat with me.</h3>
                    <li className='contactFormArea'>
                        <ul>
                            <li className='font-helvetica font-normal text-lg text-brandColors leading-[35%] underline'>SEND A BRIEF</li>
                            <li className='w-[321px] font-helvetica font-normal text-[15px] text-brandColors leading-[130%] mt-6'>I recommend filling out a brief to assess the cost of the project. <span>Brief</span></li>
                        </ul>
                        <ContactForm />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default ContactBanner