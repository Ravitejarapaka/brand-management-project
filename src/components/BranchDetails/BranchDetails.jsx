import React from 'react'
import './BranchDetails.css'

const BranchDetails = () => {
  return (
    <div className='first'>
    <h2>1.Branch Details</h2>
      <div className='container'>
      <div className='details-first'>
            <div className='each'>
                <h3 className='sub-heading'>Branch Name:</h3> 
                <h3 className='para'>SPL-CORPORATE</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Short Name:</h3> 
                <h3 className='para'>SPL</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Street:</h3> 
                <h3 className='para'>SMITH ROAD</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>City:</h3> 
                <h3 className='para'>CHENNAI</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Pincode:</h3> 
                <h3 className='para'>600006</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>GSTIN:</h3> 
                <h3 className='para'>33AAACS4949P1ZU</h3>
            </div>
      </div>

      <div className="details-last">
      <div className='each'>
                <h3 className='sub-heading'>Branch Code:</h3> 
                <h3 className='para'>C001</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Door No:</h3> 
                <h3 className='para'>NO.3</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Locality:</h3> 
                <h3 className='para'>chennai</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>State:</h3> 
                <h3 className='para'>TAMIL NADU</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>PAN No:</h3> 
                <h3 className='para'>AAACS4949P</h3>
            </div>

            <div className='each'>
                <h3 className='sub-heading'>Branch Type:</h3> 
                <h3 className='para'>Corporate Office</h3>
            </div>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default BranchDetails
