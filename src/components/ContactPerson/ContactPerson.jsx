import React from 'react'
import './ContactPerson.css'

const ContactPerson = () => {
  return (
      <div className='first'>
    <h2>4.Contact Person Details</h2>
      <div className='container'>
      <div className='details-first'>
            <div className='each'>
                <h3 className='sub-heading'>Contact Person Name:</h3> 
                <h3 className='para'>S SRINIVASAN</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Alternate No:</h3> 
                <h3 className='para'>9940093856</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Email Id:</h3> 
                <h3 className='para'>srinivasan.s@sundharams.com</h3>
            </div>
      </div>

      <div className="details-last">
      <div className='each'>
                <h3 className='sub-heading'>Contact No:</h3> 
                <h3 className='para'>9940093856</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Whatsapp No:</h3> 
                <h3 className='para'>9940093856</h3>
            </div>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default ContactPerson
