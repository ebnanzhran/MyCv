import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6zg8cnk', 'template_gkejbai', form.current, 'WE21WgW2xMRFPoo5F')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div id='contact' style={{
          backgroundColor:"white"
        }}>
          <h1 style={{
              textAlign:"center"
      
          }}>Contact us</h1>
      <nav className='container border'
      style={{marginTop:"20px",
      marginBottom:"30px",
      width: "50%",
      backgroundImage:`url('https://browsecat.net/sites/default/files/orange-background-hd-126457-578028-2940346.png')`,
      backgroundPosition:'center'
    //   backgroundSize:'cover'
      
      }}>
    <form style={{
        margin:"25px 85px 75px 100px"
    }} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='form-control' type="text" name="user_name" />
      <label>Email</label>
      <input className='form-control' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='form-control' name="message" rows='4' />
      <input type="submit" value="Send" className='btn btn-secondar'
      style={{
          marginTop:"20px",
          alignItems:"center",
          backgroundColor:"#F57F17"
      }} />
    </form>
    </nav>
    </div>
  );
};