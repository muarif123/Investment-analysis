import React from 'react'
import Transition from '../transition.jsx';



const About = () => {
  return (
    <div>
        <h1>About</h1>
    </div>
  )
}

const WrappedAbout = Transition(About)
export default WrappedAbout