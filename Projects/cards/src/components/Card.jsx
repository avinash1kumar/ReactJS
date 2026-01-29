import React from 'react'
import { Hash } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
        {/* <div className='cards-div'> */}
            <div className='card'>
                <div className='serialno-div'><Hash size={18} /><p>{props.serialNo}</p></div>
                <img src= {props.imageLink} alt="image" />
                <div className="bottom-content">
                    <h2 className='name'>{props.name}</h2>
                    <p className='features'>{props.features}</p>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Card