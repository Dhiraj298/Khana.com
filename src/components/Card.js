import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart , useCart } from './ContextReducer';

export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options);  
    let foodItem = props.foodItems;
    const priceRef = useRef();
    let data = useCart();
    let dispatch = useDispatchCart();
    const [qty , setQty] = useState(1);
    const [size , setSize] = useState("")

    const handleAddtoCart = async () =>{
        
        await dispatch({type: "ADD" , id: props.foodItem._id , name : props.foodItem.name , price : finalPrice , qty : qty , size : size });
        console.log("===>>> " ,  data)
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{ 
        setSize(priceRef.current.value)
        
    } , [])
    
  return (
    // <div>Card</div>
    <div className="card" style={{"width": "18rem", margin: "10px"  }}>
                <img src={props.foodItem.img} style={{height : "220px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">Some quick example text to  .</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <div className='container w-100'>
                            <select className='m-2 h-100 rounded' style={{"backgroundColor" : "green"}} onChange = {(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6) , (e,i) => {
                                    return(
                                        <option key={i + 1} value = {i + 1}>
                                            {i+1}
                                        </option>
                                    )
                                } ) }
                            </select>
                            <select className='m-2 h-100 rounded' style={{"backgroundColor" : "green"}}  ref = {priceRef} onChange = {(e)=>setSize(e.target.value)}>
                                {priceOptions.map((data)=>{
                                    return(
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })}
                            </select>


                            <div className='d-inline fs-5'>
                                {finalPrice}
                            </div>
                            <hr>
                            </hr>

                            <button className={'btn btn-success justify-center ms-2'} onClick={handleAddtoCart}>Add to cart</button>
                        </div>
                    </div>
            </div>
  )
}
