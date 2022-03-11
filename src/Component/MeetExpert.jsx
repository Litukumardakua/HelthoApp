import React from 'react';
import doctor from '../image/doctor.jpg';

const MeetExpert = () => {
  return (
    <div className='container'> 
      <main className='grid'>
      <h1 className='expert_main_heading'>Meet Our export doctor</h1>
          <article>
          <img src={doctor} alt="askingimage"/>
            <div>
                <h3 className='expert_heading'>Dr. Ayush Khatun</h3>
                <h6 className='expert_heading_special'>Neuro Surgeon</h6>
                <p className='expert_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
            </div>
          </article>

          <article>
          <img src={doctor} alt="askingimage"/>
            <div>
                <h3 className='expert_heading'>Dr. Ayush Khatun</h3>
                <h6 className='expert_heading_special'>Neuro Surgeon</h6>
                <p className='expert_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
            </div>
          </article>

          <article>
          <img src={doctor} alt="askingimage"/>
            <div>
                <h3 className='expert_heading'>Dr. Ayush Khatun</h3>
                <h6 className='expert_heading_special'>Neuro Surgeon</h6>
                <p className='expert_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
            </div>
          </article>

          <article>
          <img src={doctor} alt="askingimage"/>
            <div>
                <h3 className='expert_heading'>Dr. Ayush Khatun</h3>
                <h6 className='expert_heading_special'>Neuro Surgeon</h6>
                <p className='expert_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
            </div>
          </article>
          <button className='Meet_expert_btn'>See all doctors</button>
      </main>    
    </div>
  )
}

export default MeetExpert