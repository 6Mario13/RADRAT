import PropTypes from 'prop-types'
import { useState } from 'react';
export const BikeCard = ({ type, description, image }) => {
  const [isExpanded, setIsExpanded]= useState(false)
  return (
    <div className="flex flex-1 flex-col  rounded-xl bg-gray-100 drop-shadow-xl">
     
      <img className=' rounded-xl ' src={`/${image}`} alt={type} />
      
      <div className='p-6 basis-1/2'>
        <h3 className='border-b text-4xl py-6'>{type}</h3>
        
        <p className='py-6'>{description}</p>
        <button className='border px-3 py-1 border-gray-500 rounded-xl' onClick={() => {setIsExpanded(!isExpanded)}}>{isExpanded ? "Hide" : "Show more"}</button>
        {isExpanded && (<p className='py-6'>{description}</p>)}
      </div>
    </div>
  );
};

BikeCard.propTypes = {
type: PropTypes.string,
description: PropTypes.string,
image: PropTypes.string,
}