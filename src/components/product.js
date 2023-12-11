import React  from 'react';
import { useParams } from 'react-router';


function Product(){
    const params=useParams();
    return (
      <div style={{background:"#ccc", color:"blue", margin:"20px 20px"}}>
        <h1>Product</h1>
        <h2>Id: {params.id}</h2>
        
      </div>
    )
  }
export default  Product;
