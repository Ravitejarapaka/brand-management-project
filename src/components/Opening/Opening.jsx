import React from 'react'
import './Opening.css'

const Opening = () => {
  return (
    <div className='first'>
    <h2>5.Opening Details</h2>
      <div className='container'>
      <div className='details-first'>
            <div className='each'>
                <h3 className='sub-heading'>Date:</h3> 
                <h3 className='para'>26-12-2024</h3>
            </div>
      </div>

      <div className="details-last">
      <div className='each'>
                <h3 className='sub-heading'>Amount:</h3> 
                <h3 className='para'>-</h3>
            </div>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default Opening
