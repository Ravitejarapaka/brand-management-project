import React from 'react'
import './BankAccount.css'

const BankAccount = () => {
  return (
    <div className='first'>
    <h2>7.Bank Accounts</h2>
      <div className='container1'>
      <div className='details-first1'>
            <div className='each'>
                <h3 className='sub-heading1'>ACCOUNT NUMBER</h3> 
            </div>

            <div className='each'>
                <h3 className='sub-heading1'>ACCOUNT HOLDER NAME</h3> 
            </div>

            <div className='each'>
                <h3 className='sub-heading1'>IFSC CODE</h3> 
            </div>

            <div className='each'>
                <h3 className='sub-heading1'>BANK NAME</h3> 
            </div>

            <div className='each'>
                <h3 className='sub-heading1'>BRANCH NAME</h3> 
            </div>
      </div>

      <div className="details-last1">
      <div className='each'>
                <h3 className='para1'>213242343454</h3> 
            </div>

            <div className='each'>
                <h3 className='para2'>JEROM</h3> 
            </div>

            <div className='each'>
                <h3 className='para1'>ICIC0000558</h3> 
            </div>

            <div className='each'>
                <h3 className='para1'>ICICI Bank</h3> 
            </div>

            <div className='each'>
                <h3 className='para1'>MYSOREINFOSYS</h3> 
            </div>
      </div>
      </div>
      <hr/>
    </div>
  )
}

export default BankAccount
