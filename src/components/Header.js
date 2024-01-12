import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar   style={{backgroundColor:"#546ba1",height:'80px' ,width:"100%"}}>
        <Container >
          <Navbar.Brand  href="#home">
            <img  style={{height:"60px" , width:'70px',marginTop:'10px',marginLeft:'30px'}} 
              alt=""
              src="https://i.postimg.cc/FFJjCwhv/432a0a3e46dd4ef312768b676f41efd5-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
      <b style={{fontSize:"40px",color:'black '}}> Google Doc</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
