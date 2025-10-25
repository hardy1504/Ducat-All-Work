import React from 'react'

const Foot = ({elm:{num,foot}}) => {
  return (
    <div className='col-4'>
        <h4>{num}</h4>
        <h6>{foot}</h6>
    </div>
  )
}

export default Foot 