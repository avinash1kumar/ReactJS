import React from 'react'

const RightCardContent = (props) => {
    // console.log(props)
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between">
                 <h2 className="bg-white text-xl font-semibold rounded-full h-8 w-8 flex items-center justify-center">
                    {props.serialNo + 1}
                  </h2>
                 <div>
                    <p className=" text-lg leading-relaxed mb-10 text-white">
                        {props.intro}
                    </p>
                    <div className="flex justify-between">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm">
                            {props.tag}
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold"><i className="ri-arrow-right-line"></i></button>
                    </div>
                 </div>
            </div>
  )
}

export default RightCardContent