import React from 'react'

const CurrentTime = () => {
    let time = new Date();
  return (
    <div>
      <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime
