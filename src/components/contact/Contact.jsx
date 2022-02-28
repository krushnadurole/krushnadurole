import React from 'react'
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.png"
import emailjs from "emailjs-com";
// import linkedin from "linkedin.jpeg"
// import insta from "insta.jpeg"
import './Contact.css'
import { useState, useContext, useRef } from 'react'
const Contact = () => {
    const formRef = useRef();
    const [done, setdone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_xwpchgi",
                "template_hxhapoc",
                formRef.current,
                "kkUW7hEqadAMiWhyX"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setdone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );

    }
    return (
        <div>
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h2 className="c-title">
                            Let's connect to make some innovative and productive
                        </h2>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className='c-icon' />
                                +9322670429
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className='c-icon' />
                                krushnadurole2000ad@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className='c-icon' />
                                Balajinagar, Ramnagar, Jalna
                            </div>
                            <div className="c-info-item">
                                    <img   src="./icon-images/linkedin.jpeg" alt="" className='c-icon' id = "linkdin"/>
                                <a href=" https://www.linkedin.com/in/krushna-durole-0357931b9/">
                                    krushna durole 
                                </a>
                                
                            </div>
                            <div className="c-info-item">
                                <a href="">
                                     <img    src="./icon-images/insta.jpeg" alt="" className='c-icon'id = "insta" />
                                     instagram id .
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your story?</b>
                            <em className='c-desc-d'>Get in touch . Always available to productive and innovative ideas
                                if the right project comes along me.</em>
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name='user_name' />
                            <input type="text" placeholder='Subject' name='user_subject' />
                            <input type="text" placeholder='Email' name='user_email' />
                            <textarea name="message" placeholder='Message' rows="5"></textarea>
                            <button>Submit</button>
                            {done && "   Thank you...   "}
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;