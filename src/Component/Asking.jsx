import React from 'react';
import doctor from '../image/doctor.jpg';

const Asking = () => {
  return (
    
    <div id='asking'>
        <div className='asking_text'>
            <h1 className='asking_heading'>Any time and any where you can ask to our experts</h1>
            <p className='asking_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
        </div>
        <div className='asking_img'>
          <img src={doctor} alt="askingimage"/>
        </div>
    </div>
    
  )
}

export default Asking