

import React from 'react'

function Info({title,value}) {
  return (
  
   <p className='fs-5 bg-black'>
    <span className='badge bg-danger me-3'>{title}</span>
    <span>{value}</span>
    </p>
  )
}

export default Info;
