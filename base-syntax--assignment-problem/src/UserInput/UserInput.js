import React from 'react';

const userInput = (props) => {
  const style = {
    border: "1px solid black",
    borderRadius: "4px",
    width: "60%",
    padding: "10px",
    margin: "10px",
    boxShadow: "0 3px 2px #eee"
  }
  return <input style={style} type="text" onChange={props.changed}/>
}

export default userInput;