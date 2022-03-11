import React from 'react';
import SolutinsBox from './SolutinsBox';
import search from '../image/search.png';
const Solutions = () => {
  return (
    <div id='solution'>
        <h1 className='solution_heading'>Easy Steps to get solutions</h1>
        <div className='container'>
            <SolutinsBox image={search}
                title="Search Doctor"
                titlePara="Lorem ipsum is simply dummy text of the printing and  typesetting industry."
            />
             <SolutinsBox image={search}
                title="Make Appointment"
                titlePara="Lorem ipsum is simply dummy text of the printing and  typesetting industry."
            />
             <SolutinsBox image={search}
                title="Get Solution"
                titlePara="Lorem ipsum is simply dummy text of the printing and  typesetting industry."
            />
             <SolutinsBox image={search}
                title="Consoltation"
                titlePara="Lorem ipsum is simply dummy text of the printing and  typesetting industry."
            />
        </div>

    </div>
  )
}

export default Solutions