import React from 'react';

const SolutinsBox = (props) => {
  return (
    <div className='box'>
    <div className='img_one'>
    <img src={props.image} alt='search'/>
    </div>
    <div>
        <h3 className='solution_text'>{props.title}</h3>
        <p className='solution_para'>{props.titlePara}</p>
    </div>

    </div>
  )
}

export default SolutinsBox