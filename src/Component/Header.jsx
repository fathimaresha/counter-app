import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div> <MDBNavbar light bgColor='info'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://th.bing.com/th/id/R.705a56f8bae2caeebbf02a066938edbc?rik=2GE5EskOdT0G7g&riu=http%3a%2f%2fs2.favim.com%2forig%2f36%2fanimation-counter-gif-love-numbers-Favim.com-292566.gif&ehk=We9p6O1XFkGTqS5wAoqew2augr3PwLpi4iHMbO3j7Lk%3d&risl=&pid=ImgRaw&r=0'
          height='30'
          alt=''
          loading='lazy'
        />
        Counter App
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header