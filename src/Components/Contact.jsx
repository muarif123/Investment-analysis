import React from 'react'
import Transition from '../transition.jsx';



const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
    </div>
  )
}

const WrappedContact = Transition(Contact)
export default WrappedContact