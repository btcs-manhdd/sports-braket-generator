import React from 'react'
import Double from "../Double/Double";

interface propsRound{
  quantity: number
}

function Round({ quantity }: propsRound){
  return ( 
    <div>
      <Double/>
    </div>
   );
}

export default Round;