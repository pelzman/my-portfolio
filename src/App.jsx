import React from 'react';
import {Tabs, TabList, TabPanels, Text, TabPanel, Stack, Box } from '@chakra-ui/react';
import { Route, Routes, useLocation } from "react-router-dom";        
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import { AnimatePresence } from 'framer-motion';

import './App.css';

export default function App() {
  const location = useLocation()
  return(
   <main className="main-container">
     <Header/> 
   
     <AnimatePresence  mode='wait'>
      <Routes location ={location} key={location.pathname}>       
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Project/>} />
        <Route path="contacts" element={<Contact/>} />
      </Routes>
      </AnimatePresence>         
       
   </main>   
   
  )
  

  
}

