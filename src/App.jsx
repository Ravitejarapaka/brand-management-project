import React from 'react'
import './App.css'
import BranchDetails from './components/BranchDetails/BranchDetails'
import BranchContact from './components/BranchContact/BranchContact'
import BranchIncharge from './components/BranchIncharge/BranchIncharge'
import Opening from './components/Opening/Opening'
import ContactPerson from './components/ContactPerson/ContactPerson'
import AdvanceRequest from './components/AdvanceRequest/AdvanceRequest'
import BankAccount from './components/BankAccounts/BankAccount'

const App = () => {
  return (
    <div>
      <h1>Branch View</h1>
      <BranchDetails/>
      <BranchContact/>
      <BranchIncharge/>
      <ContactPerson/>
      <Opening/>
      <AdvanceRequest/>
      <BankAccount/>
      
        <div className='app-container'>
          <button>Close</button>
        </div>
    </div>
  )
}

export default App
