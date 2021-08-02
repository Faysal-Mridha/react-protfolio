import React from 'react'
import './Contact.css'
import Header from '../components/Header'
import ContactF from '../components/Home/Contact'

function Contact() {
    return (
        <div className="contactPage">
            <header>
                <Header />
            </header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14746.44556465354!2d89.95384448622522!3d22.481233190745435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0006fdd498ab2d%3A0x6aa0163005af7666!2sZianagar!5e0!3m2!1sen!2sbd!4v1625765552230!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
            
            <ContactF />



        </div>
    )
}

export default Contact
