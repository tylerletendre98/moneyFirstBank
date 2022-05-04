import React from 'react'
import AddAccountForm from '../components/addAccountForm/AddAccountForm'

function AddAccountPage(props) {
  return (
    <div>
        <AddAccountForm addAccount={props.addAccount}/>
    </div>
  )
}

export default AddAccountPage