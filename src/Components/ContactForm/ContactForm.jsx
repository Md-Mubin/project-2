import React from 'react'
import './ContactForm.css'
import CommonButton from '../../Commons/CommonButton'

const ContactForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder='NAME' className='nameInput'/>
                <input type="email" placeholder='EMAIL' />
                <input type="massage" placeholder='MASSAGE' />
                <CommonButton/>
            </form>
        </>
    )
}

export default ContactForm