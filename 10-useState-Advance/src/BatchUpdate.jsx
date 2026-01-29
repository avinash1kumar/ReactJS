import React, { useState } from 'react'

const BatchUpdate = () => {

    const [num, setNum] = useState(10)
    
    const btnClicked = () => {
        // by calling setNum() three time this won't increase num by 3. it will increase only by 1
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)

        // these will increase value by 3. cause in first setNum u are updating previous value by 1 and in second the same previous value is geting update and so in third
        setNum(prev => (prev+1)) // 10 + 1 = 11
        setNum(prev => (prev+1)) // 11 + 1 = 12
        setNum(prev => (prev+1)) // 12 + 1 = 13

    }

  return (
    <div>
        <hr />
        <h1>Batch Update</h1>
        <h1>{num}</h1>
        <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default BatchUpdate