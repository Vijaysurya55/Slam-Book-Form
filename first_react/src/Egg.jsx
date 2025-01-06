import React from 'react'
import Halfboil from './Halfboil'
const Egg = (props) => {
  return (
    <div>
        <h1>Egg</h1>
        <Halfboil name={props.name}></Halfboil>
     </div>
  )
}

export default Egg