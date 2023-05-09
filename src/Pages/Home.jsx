import React,{useState} from 'react'
import {Container, Nav, Navbar,NavDropdown, Button} from 'react-bootstrap';
import Image from '../assets/preview.png';

import {HStack, VStack} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion'

export default function Home() {

 return(
    <motion.div  className='home'
     style={{ backgroundImage:`url(${Image})` ,
    backgroundSize:'contain',  backgroundRepeat: 'no-repeat'}}
    initial={{x:300, scale:0.5}} 
         animate={{x:0, scale:1}}
         transition={{duration:1}}
    
    >
      
        <motion.div className="name fs-lg-1" 
        style={{marginRight:'auto', fontSize:20, fontFamily:"fantasy"}}
         initial={{x:-300, scale:0.5}} 
         animate={{x:0, scale:1}}
         transition={{duration:1}}
        >
           <h2 className='home_sm' style={{fontFamily:'Poppins', color:'#30538A'}} >Hello, my name is</h2> 
        </motion.div>
         <motion.div className="name2"
           initial={{x:300, scale:0.5}} 
         animate={{x:0, scale:1}}
         transition={{duration:1}}
         
         >
           <font>Oluwapelumi Adeyemo</font>
        </motion.div>
    <motion.div className="desc"
       initial={{y:300, scale:0.5}} 
         animate={{y:0, scale:1}}
         transition={{duration:1}}
    >
    <font className='font2'> And I'm a FrontEnd Engineer </font>  
    </motion.div>
  <motion.HStack style={{justifyContent:'space-between'}}
  initial={{y:300, scale:0.5}} 
         animate={{y:0, scale:1}}
         transition={{duration:1}}
  >
    <NavLink to='/contacts'><Button className='px-lg-5 px-md-4 py-lg-4 py-md-3 hire-btn'    style={{ marginTop:10, fontFamily:'poppins', marginLeft:'30px'}} >Hire Me</Button>{' '}</NavLink> 
    {/* <img src={Image} alt="" /> */}
 <Button className='px-lg-5 px-md-4 py-lg-4 py-md-3 cv-btn' href = "https://drive.google.com/file/d/1U5qaLrwLAdwZPE9aPJiCBMyhVfBp4RwW/view?usp=share_link"  style={{ marginTop:10, fontFamily:'poppins'}} >My CV</Button>

  </motion.HStack>
  
    </motion.div>
 )
      

  
}
