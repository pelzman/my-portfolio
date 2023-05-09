import React from 'react'
import { HStack, Stack, Icon, Divider } from '@chakra-ui/react'
import {FaHtml5, FaCss3} from 'react-icons/fa'
import Image from "../assets/real4.png"  
import Html from '../assets/html-5.png'
import CSS from '../assets/css-3.png'
import Java from '../assets/java-script.png'
import Git from '../assets/git.png'
import react from '../assets/react.png'
import Bootstrap from '../assets/bootstrap.png'
import {motion} from "framer-motion"

export default function About() {


  return (
    <div className='about text-center' >
      < motion.div
       initial={{y:-300, scale:0.5}} 
         animate={{y:0, scale:1}}
         transition={{duration:1}}
      >
         <h2 style={{fontSize:30, color:'#30538a', fontWeight:600}}>About Me</h2>
        
        <h2  style={{marginTop:50, fontSize:24, fontWeight:600, color:'#30538a', fontFamily: 'Poppins'}}>Profile</h2>
       <p className=" details fs-lg-3 ">Customer-focused web and mobile developer with vast knowledge in building a responsive website and mobile apps that would entice the prospective users.
Excellent communication skills and experience building complete complete website , e-commerce app and an android news blog app using React JS,React-Native, styled-components css  to achieve these. Passionate about coding, 
thinking and researching on how to make life easy for the users.</p>

<h2 style={{fontSize:24, fontWeight:600, color:'#30538a', marginTop:40, marginBottom:40}}>Skills</h2>
  </motion.div> 
       
<motion.div className=' about-logo' 
  initial={{x:300, scale:0.5}} 
         animate={{x:0, scale:1}}
         transition={{duration:1}}
>
<div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'
, marginLeft:20}}>
<img src={Html} alt="" width='40' height='40' />
  <p>HTML</p>
</div>
<div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={CSS} alt="" width='40' height='40'  />
  <p>CSS</p>
  </div>
  <div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={Java} alt="" width='40' height='40'  />
  <p>JAVASCRIPT</p>
</div>
<div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={react} alt="" width='40' height='40'  />
  <p>REACT-JS</p>
</div>
<div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={react} alt="" width='40' height='40'  />
  <p>REACT-NATIVE</p>
</div>
<div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={Bootstrap} alt="" width='40' height='40'  />
  <p>BOOTSTRAP</p>
</div>
<div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  <img src={Git} alt="" width='40' height='40'  />
  <p>GIT</p>
</div>
</motion.div>
<motion.div
initial={{y:300, scale:0.5}} 
         animate={{y:0, scale:1}}
         transition={{duration:1}}
         className="about-all"
>

  <h2 style={{fontSize:24, fontWeight:600, color:'#30538a', marginTop:40, marginBottom:40}}>Experience</h2>
 
 <h5>December, 2022 - Current</h5>
<p className='fs-5 text-center'>Mentor at ibuild </p>


 <h5> October, 2022 - Current</h5>
<p className='fs-5 text-center'>Mobile App engineer at MisaPay</p>

<h5>June, 2022 - Current</h5>
<p className='fs-5 text-center'>Frontend engineer at Continus inc.</p>

<h5> January, 2022 -  June, 2022</h5>
<p className='fs-5 text-center'>Frontend engineer  (Intern) at Continus inc.</p>

<h2 style={{fontSize:24, fontWeight:600, color:'#30538a', marginTop:40, marginBottom:40}}>Education</h2>
<h5>June, 2021 - July, 2021</h5>
  <p className='fs-5'>Web Development  at FreeCodeCamp</p>

  <h5>2014 - 2019</h5>
  <p className='fs-5'>Agricultural Extension at Obafemi Awolowo University, Ile-Ife</p>
      
</motion.div>

    </div>
  )
}





