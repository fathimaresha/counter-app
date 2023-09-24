import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/000/441/347/original/vector-shopping-cart-icon.jpg'
          height='30'
          alt=''
          loading='lazy'
        />
        store
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header