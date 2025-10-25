import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'

const Card = ({elm:{imgAdd,days,post,text,foot,cardColor}}) => {
  // const {imgAdd,days,post,text,foot} = elm
  
  return (
    <div className='col-4 border-transparent text-center p-3 mt-3'>
      <First imgAdd={imgAdd}  />
      <Second days={days} post={post} text={text}  cardColor={cardColor}/>
      <Third foot={foot} cardColor={cardColor}/>
    </div>
  )
}

export default Card   