import React from 'react'

const char = (props) => {
  const styles = {
    padding: "10px",
    border: "1px solid black",
    margin: "10px",
    textAlign: "center",
    cursor: "pointer",
    display: "inline-block"
  }
  
  return (
    <div onClick={props.click} style={styles}>
      <h1>{props.character}</h1>
    </div>
  )
}

export default char;