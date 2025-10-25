import React from 'react'

const Second = ({days,post,text,cardColor}) => {
  return (
    <div>
      <h5 className={`text-${cardColor}`}>{days} ago</h5>
      <h2>Post {post}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Second