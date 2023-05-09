import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
// import '../node_modules/react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'




const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
 <ChakraProvider>
   <ColorModeScript initialColorMode="dark" ></ColorModeScript>
      <App />
    </ChakraProvider>
    </Router>
   
  </React.StrictMode>,

)
