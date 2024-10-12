import React from 'react'
import Transition from '../transition.jsx';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}
const WrappedHome = Transition(Home)
export default WrappedHome