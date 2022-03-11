import React from 'react';

const LoginPage = () => {
  return (
    
    <div id='login'>
        <div className='discount_text'>
            <h6 className='discount_appointment'>Book Appointment</h6>
            <h1 className='discount_heading'>Get 20% discount on your booking</h1>
            <p className='discount_para'>Lorem ipsum is simply dummy text of the <br/>  printing and  typesetting industry. Lorem ipsum <br/> has been the industry's standard dummy text</p>
        </div>
        <div className='login_page'>
          <h1 className='login_heading'>Login</h1>
          <input className='login_input' placeholder='First Name'/>
          <input className='login_input' placeholder='Last Name'/>
          <input className='login_input' placeholder='Date of birth'/>
          <input className='login_input' placeholder='Gender'/>
          <input className='login_input' placeholder='Phone number'/>
          <input className='login_input' placeholder='Email'/>
          <input className='login_input_Address' placeholder='Address'/>
          <input className='login_input' placeholder='Zipcode'/> <br/>
          <button className='login_submit'>Submit Form</button>
        </div>
    </div>
  )
}

export default LoginPage