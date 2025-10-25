import React, { useState } from 'react'

const Counter = () => {
   let [count,setCount] = useState(0)

    // let count = 0;
    // const handleIncreement = () =>{
    //     count = count + 1
    //     setCount(count)
    // }    
  return (
    <div className="container">
        <div className="row text-center">
            <div className="col-6 mx-auto border">
                <h1>Counter App</h1>
                <h1>Count:{count} </h1>
                <div>
                    <button 
                    // onClick={()=>handleIncreement("hii")}
                    //  onClick={handleIncreement} 
                    onClick={()=> count < 10 ? setCount(++count): setCount(count)}
                     className='btn btn-success'
                     > 
                        Add
                    </button>

                    <button className='btn btn-danger mx-2'
                     onClick={()=> count>0 ? setCount(--count): setCount(count)}>
                        Del
                    </button>
                    <button className='btn btn-warning mx-2' 
                    onClick={()=>setCount(0)}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter  