import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import Linkedin from '../../assets/Linkedin.jpg'
import Github from '../../assets/Github.jpg'

const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e237f833-e8d1-4ed0-af2e-ad4c22a053a2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Open to new ideas, projects, or collaborations — let’s start the conversation.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>Email: <a href="mailto:pawanraulo@gmail.com" className="Email">pawanraulo@gmail.com</a></p>
                    </div>
                     <div className="contact-detail">
                        <img src={location_icon} alt=""/> <p>Hyderabad India</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Linkedin} alt="" /> <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/pawan-raulo-349526326" target="_blank">https://www.linkedin.com/in/pawan-raulo-349526326</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={Github} alt="" /> <p>Visit my GitHub profile here: <a href="https://github.com/pawan-raulo7" target="_blank">https://github.com/pawan-raulo7</a></p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter yout email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact