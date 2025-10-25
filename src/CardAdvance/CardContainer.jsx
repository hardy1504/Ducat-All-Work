import React from 'react'
import Card from './Card'

const CardContainer = () => {
  const info = [
    {
      cardColor:'danger',
      imgAdd:"4.jpg",
      days:"4 Days",
      post:"One",
      text:"Hello I am practising in react js Nowdays Buddy But i Am late.",
      foot:[
      {
        num:7,
        foot:"Reads",
      },
      {
        num:3224,
        foot:"Views",
      },
      {
        num:21,
        foot:"comments",
      },
    ],
    },
     {
      cardColor:'warning',
      imgAdd:"2.jpg",
      days:"1 Week ",
      post:"Two",
      text:"Hello can you please Help me in learing this shit man i am out now .",
      foot:[
      {
        num:11,
        foot:"Reads",
      },
      {
        num:1669,
        foot:"Views",
      },
      {
        num:57,
        foot:"comments",
      },
    ],
    },
      {
      cardColor:'success',
      imgAdd:"3.jpg",
      days:"4 Week ",
      post:"Three",
      text:"Hello I am practising Neither i am feeling that i am learning something here .",
      foot:[
      {
        num:4,
        foot:"Reads",
      },
      {
        num:1624,
        foot:"Views",
      },
      {
        num:17,
        foot:"comments",
      },
    ],
    },
  ]
  return (
    <div className='container'>
      <div className="row">
        {info.map((elm)=><Card elm={elm}/>)}
      </div>
    </div>
  )
}

export default CardContainer