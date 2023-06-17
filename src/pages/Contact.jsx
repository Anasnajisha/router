import React from 'react'
import '../css/Contact.css'

export default function Contact() {

   
    return (
        <div>
            <form id="contact-form" method="post" action="">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" />
                    <span class="error-message" id="email-error"></span>
                </div>
                <div class="form-group">
                    <label for="message">Password:</label>
                    <textarea id="message" name="message" ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
