import React from 'react'

const validation = (props) => {
  let text = "Length is good"

  if (props.textLength <= 5) {
    text = "Too short"
  }

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default validation
