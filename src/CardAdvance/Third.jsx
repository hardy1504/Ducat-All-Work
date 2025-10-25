import React from 'react'
import Foot from './Foot'

const Third = ({foot,cardColor}) => {
  return (
    <div className={`container bg-${cardColor} py-1`}> 
      <div className="row">
        {foot.map(elm=><Foot elm ={elm}/>)}
      </div>
    </div>
  )
}

export default Third