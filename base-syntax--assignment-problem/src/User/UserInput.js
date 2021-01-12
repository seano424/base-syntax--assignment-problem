import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.username}/>
      <input type="text" onChange={props.change} value={props.content}/>
    </div>
  )
}

export default userInput;