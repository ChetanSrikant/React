import React from 'react'

const Random = () => {

    let no = Math.random()*100

  return (
    <div>
      random no is : {Math.round(no)}
    </div>
  )
}

export default Random
