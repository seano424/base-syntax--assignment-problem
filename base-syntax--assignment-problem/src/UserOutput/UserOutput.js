import React from 'react';
import "./UserOutput.css"

const userOutput = (props) => {
  return (
    <div className="UserName">
      <p>Username: {props.userName} </p>
      <p>This is some paragraph</p>
    </div>
  )
}

export default userOutput;