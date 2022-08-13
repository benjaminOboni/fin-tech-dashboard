import React from 'react'
import { mastercard_logo, visa_logo } from '../../utils/svgs';
function Card({type}) {
  return (
    <div className={`${type==="visa"? "bg-[#E0E7EA]" : "bg-black"} w-full rounded py-2 px-3 space-y-10`}>
        <h1 className={`items-end justify-end flex w-full ${type==="visa"? "text-black" : "text-gray-100"}`
      }>
        01/2022
        </h1>
        <div className="flex justify-between">
        {type==="mastercard"?<div>{mastercard_logo}</div>:<div>{visa_logo}</div>}
        
        <h1 className={`items-end justify-end flex w-full self-center
         ${type==="visa"? "text-black" : "text-gray-100"}`}>
          {" "} ...4060{ " "}
         </h1>
         </div>
    </div>
  )
}

export default Card