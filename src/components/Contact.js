import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div id='contactPage'>
            <h1>Contact Me</h1>
            <div className="contactForm">
                <form name="contact" method="POST" data-netlify="true" action="https://formspree.io/f/mqknynko">
                    <label htmlFor="Name">Your Name</label><br />
                    <input type="text" name="Name" id="Name" placeholder='Your Name' /><br />
                    <label htmlFor="Name">Your E-Mail ID</label><br />
                    <input type="email" name="mail" id="mail" placeholder='Your E-Mail Address' /><br />
                    <label htmlFor="Name">Your Message</label><br />
                    <textarea></textarea><br />
                    <button type='submit' id='sendMSg'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact