



import React from 'react'

function Child() {
    console.log("child rendering")
  return (
    <div>child

        <h3></h3>
    </div>
  )
}

export default React.memo(Child)