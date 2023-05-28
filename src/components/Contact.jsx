import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { EmailOutlined, MapOutlined, PhoneAndroidOutlined, SendOutlined } from '@material-ui/icons';
const Contact = () => {
    const ref=useRef();
    const [done,setDone]=useState(false);
    const [focusedusername,setFocusedusername]=useState(false);
    const [focusedemail,setFocusedemail]=useState(false);
    const [focusedmsg,setFocusedmsg]=useState(false);
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [msg,setMsg]=useState('');
    const errorMsg={
      username:"userName is requared *",
      email:"it should be a valid email address *",
      msg:"it can't be empty *"
    }
    function handleSubmit(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_1n8kyu9', 
        'template_1ltr0lc', 
        ref.current, 
        'user_NNBXdn4rLyJZQVlfvqKbI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setFocusedusername(false);
          setFocusedemail(false);
          setFocusedmsg(false);
          setUsername("");
          setEmail("");
          setSubject("");
          setMsg("");
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
      <section className="contact section" id="contact">
        <h2 className="section__title cap">contact me</h2>
        <span className="section__subtitle cap">get in touch</span>
        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <PhoneAndroidOutlined className='contact__icon' />
              <div>
                <div className="contact__title cap">call me</div>
                <span className="contact__subtitle cap">07 67 77 36 20</span>
              </div>
            </div>
            <div className="contact__information">
              <EmailOutlined className='contact__icon' />
              <div>
                <div className="contact__title cap">email</div>
                <span className="contact__subtitle">laila.ouhamou99@gmail.com</span>
              </div>
            </div>
            <div className="contact__information">
              <MapOutlined className='contact__icon' />
              <div>
                <div className="contact__title cap">Location</div>
                <span className="contact__subtitle cap">Agadir, morocco.</span>
              </div>
            </div>
          </div>
          <form
            ref={ref}
            className="contact__form grid"
            onSubmit={handleSubmit}
            >
            <div className="contact__inputs grid">
              <div className="contact__content">
                <input
                  onBlur={(e)=>setFocusedusername(true)}
                  focused={focusedusername.toString()}
                  required
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder='Your Name' />
                  <div className='errorMsg'>{errorMsg.username}</div>
              </div>
                <div className="contact__content">
                <input
                  onBlur={(e)=>setFocusedemail(true)}
                  focused={focusedemail.toString()}
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder='Your Email' />
              <div className='errorMsg'>{errorMsg.email}</div>
              </div>
                <div className="contact__content">
                <input
                  onChange={(e)=>setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  type="text"
                  className="contact__input"
                  placeholder='Your Project' />
              </div>
                <div className="contact__content">
                <textarea 
                onBlur={(e)=>setFocusedmsg(true)}
                focused={focusedmsg.toString()}
                required
                placeholder='Type your message..'
                onChange={(e)=>setMsg(e.target.value)}
                value={msg}
                name='message'
                className="contact__input contact__textarea"></textarea>
                <div className='errorMsg'>{errorMsg.msg}</div>
              </div>
              
            </div>
            <div>
              <button  className="button button--flex">
                send message
                <SendOutlined className="button__icon" />
              </button>
             {done &&  <span className="successMsg">Thank You !</span>}
            </div>
          </form>
        </div>
      </section>
    )
}

export default Contact