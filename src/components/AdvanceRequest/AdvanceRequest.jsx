import React from 'react'

const AdvanceRequest = () => {
  return (
    <div>
      <div className='first'>
    <h2>6.Advance Request Details</h2>
      <div className='container'>
      <div className='details-first'>
            <div className='each'>
                <h3 className='sub-heading'>Minimum Amount:</h3> 
                <h3 className='para'>2000</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Monthly Max Amount:</h3> 
                <h3 className='para'>20000000</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Effective Date:</h3> 
                <h3 className='para'>02-01-2025</h3>
            </div>
      </div>

      <div className="details-last">
      <div className='each'>
                <h3 className='sub-heading'>Maximum Amount:</h3> 
                <h3 className='para'>200000</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Max Unsettled Amount:</h3> 
                <h3 className='para'>20000</h3>
            </div>
      </div>
      </div>
      <hr/>
    </div>
    </div>
  )
}

export default AdvanceRequest
