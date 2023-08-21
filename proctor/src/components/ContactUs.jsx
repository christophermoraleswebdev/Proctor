
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

      const form = useRef();

      const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_whlrygy', 'template_dyr2sxp', form.current, 'uBUsXkT4RgWsnPmJc')
            .then((result) => {
                  console.log(result.text);
                  console.log("message sent")
                  e.target.reset()
                  alert('Message sent successfully')
            }, (error) => {
                  console.log(error.text);
            });
      };

      return (
            <div id="contact-form" className="contact-container">
                  <h1 id='contact-header' className="contact-us">CONTACT US</h1>
                  <div className='contact-info'>
                    <h3>Email: aldosalinas8@gmail.com</h3>
                    <button className='email-btn'>
                      <a className="contact-email" href="mailto:aldosalinas8@gmail.com">Click to Email</a>
                    </button>
                    <br />
                    <br />
                    <h3>Phone # (956) 330 - 5494</h3>
                    <button className='email-btn'>
                    <a className="contact-phone" href="tel:+19563305494">Click to Call</a>
                    </button>
                  </div>
                  <h1 className='contact-us'>REQUEST A QUOTE</h1>
                  <form ref={form} onSubmit={sendEmail}>
                    <label >Name:</label>
                    <input type="text" id="name" name="from_name" placeholder="Your Name"/>
        
                    <label>Email:</label>
                    <input type="email" id="email" name="user_email" placeholder="Your Email"/>
                    
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" name="message" placeholder="What services are you requesting..."/>
        
                    <input className="contact-btn" type="submit" value="Send" />
                  </form>
            </div>
      )
    }
    
    export default ContactUs