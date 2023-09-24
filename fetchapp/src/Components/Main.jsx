import React, {  useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import'./Main.css';
  

function Main() {
    const base_url ='https://dummyjson.com/products'

    //state creation
    const [product,setProduct]=useState([])

    //function creation
    const fetchData=async()=>{
        const response = await fetch(base_url)
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    }
    console.log(product);
    useEffect(()=>{
        fetchData()

    },[])


  return (
   
    <div className='card-container'>

        {
            product.map(item=>(
                <MDBCard style={{width:'200px',margin:'20px'}}>
                <MDBCardImage src={item.thumbnail} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.description}
                  </MDBCardText>
                  <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
                //product display as format
            ))
        }
    </div>
  )
}

export default Main