import React, { useEffect, useRef, useState } from "react";
import Products from "./Products";
import { data } from "./ProductsList";
import NotFound from "./NotFound";
import axios from "axios";

const ProductContainer = () => {
//Use Ref Hook
  const  refElm = useRef()

  const [inp,setInp] = useState("")
  const [productData , setProductData] = useState([])
  const [InitialproductData , setInitialProductData] = useState([])
  const getData = async ()=>{
  // let res = await  fetch("https://dummyjson.com/products")
  // let data  = await res.json()
  // setProductData(data.products);
  // setInitialProductData(data.products)

    let data = await axios.get("https://dummyjson.com/products")
    setProductData(data.data.products);
     setInitialProductData(data.data.products)
    
  }

  //Use Effects
  useEffect(()=>{
    getData()
  },[])

//const handleInp = (e)=>{
  // setInp(e.target.value)
// }

      const handleSearch = ()=>{
        console.log(refElm.current.className)
        
       let afterFilterProductList=  InitialproductData.filter(
        (elm)=>elm.title.toLowerCase().includes(inp.toLowerCase())
      )
        setProductData(afterFilterProductList);
        
      }
  return (
    <div className="container">
      <div className="py-2">
        <input 
        ref={refElm}
        type="text" className="Hardy" 
         onChange={(e)=>setInp(e.target.value)}/>
        <button className="btn btn-success mx-3" onClick={handleSearch}>Search</button>
      </div>
      <div className="row">
        {productData.length == 0 ? 
        <NotFound/>
         : productData.map((elm, ind) => (
          <Products key={ind} elm={elm} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
