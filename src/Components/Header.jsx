import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/LogoMakr.png'
import {FaSun, FaMoon,  FaTimes, FaHamburger} from 'react-icons/fa'
import { IconButton } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import {useLocation} from  'react-router-dom';

 
 

export default  function Header() {
   let activeStyle={
    color:'#00B7AF',
    
   }
   const { colorMode, toggleColorMode } = useColorMode()
    const isLight = colorMode === "light"
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
const location =useLocation()
    
    const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  useEffect(()=>{
   setCollapsed(true)
  },[location.pathname])
  return (  
    
<Navbar  fixed="top" className='shadow-lg p-2'  collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#30538A', textColor:'white' }}>
      <Container className='nav-container'>
        <Navbar.Brand as={NavLink} to='/' className='fs-3' style={{fontFamily: 'Poppins', fontSize:20, fontStyle:'italic'}}><font>P</font>ELZ</Navbar.Brand>
        
          
           <button onClick={()=>setCollapsed(!collapsed)} className='toggle-btn' style={{marginLeft:'auto'}}>{ collapsed ?<FaHamburger  style={{fontSize:40, color:'grey', }}/> : <FaTimes style={{fontSize:40, color:'grey'}}/>}</button> 
        <Navbar id="basic-navbar-nav"className={collapsed ? 'collapsed' : ''} >
             
          <Nav className="ms-auto fs-5 nav-item"> 

            
         
            <NavLink  to="/"   style={({isActive})=>(isActive? activeStyle : undefined)} className='nav-link fs-4'>
              Home
            </NavLink>
          
          
              <NavLink   as={Link} to="/about"  style={({isActive})=>(isActive? activeStyle : undefined)} className="nav-link fs-4">
              About
            </NavLink>
          
            
            <NavLink as={Link} to="/projects"  style={({isActive})=>(isActive? activeStyle : undefined)} className="nav-link fs-4">
              Project
            </NavLink>
        
          
            <NavLink  as={Link} to="/contacts" style={({isActive})=>(isActive? activeStyle : undefined)} className="nav-link fs-4">
              Contact
            </NavLink>
          
        
           
          </Nav>

          </Navbar>
        
          <IconButton ml={isNotSmallerScreen?'290' : '170'}  icon={ isLight?<FaMoon/>: <FaSun/>} isRound='true' className='me-5' onClick={ toggleColorMode} />        
        
      </Container>
    </Navbar>
      

  )
}

//  <NavLink to='/' style={({isActive})=>(isActive? activeStyle : undefined)} className='nav-link fs-4'> Home</NavLink> 
//             <NavLink to='/about' style={({isActive})=>(isActive? activeStyle : undefined)} className='nav-link fs-4'>About</NavLink>  
//             <NavLink to='/projects' style={({isActive})=>(isActive? activeStyle : undefined)} className='nav-link fs-4' >Project</NavLink>
//             <NavLink to='/contacts' style={({isActive})=>(isActive? activeStyle : undefined)} className='nav-link fs-4' >Contact</NavLink> 
