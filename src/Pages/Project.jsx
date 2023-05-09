import React from 'react'
import { Link, Card, CardHeader, CardBody, CardFooter, Stack , Heading, Text, Button, Divider, ButtonGroup, Image, Box} from '@chakra-ui/react'
// import  {Card,Button, Row, Container} from 'react-bootstrap';
import {motion} from 'framer-motion'


export default function Project() {
  
  return (
      <>
         
      <motion.div className='project'
      animate={{
        scale:[1,1],
        rotate:[90,0]
      }}
      transition={{
        duration:0.5,
        ease:'easeInOut'
      }}
      >
      <h2 className="project-head " style={{fontSize:30, color: '#00B7AF'}}>Projects</h2>   
      <div className='card-cont '
      >
    {/* <motion.card className='shadow-lg my-4 sharp'  style={{ width: '16rem' }}
     whileHover={{scale:1.1}}
       transition={{duration:0.5}}
    
    >
      <Card.Img className="card-image"  variant="top" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className="card-body">
        <Card.Title className=''><font> Resort-beach Apps</font></Card.Title>
        <Card.Text  className='mb-2 card-text'>
       This is an application that featured different classic rooms with outstanding features and in affordable prices.
        </Card.Text>
        <Button  className="mb-1" href = "" variant="outline-danger" style={{ fontFamily:'poppins'}} >View Demo</Button>{' '} 
      </Card.Body>
    </motion.card>

      <motion.card className='shadow-lg mb-4 sharp' style={{ width: '16rem'}}
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}https://react-pelz-resort-beach.netlify.app
      >
      <Card.Img className="card-image" variant="top" src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className="card-body" >
        <Card.Title className=''><font>Phone Shopping Cart</font></Card.Title>
        <Card.Text  className='mb-3 card-text'>
         E-commerce application that made shopping phones online easier with zero-stress
        </Card.Text>
         <Button className="mb-1" href = "https://react-phone-shopping-cart-pelz.netlify.app" variant="outline-danger" style={{ fontFamily:'poppins'}} >View Demo</Button>{' '} 
      </Card.Body>
    </motion.card>
      < motion.card className='shadow-lg mb-4 sharp'  style={{ width: '16rem' }}
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}
      >
      <Card.Img className="card-image" variant="top" src="https://images.pexels.com/photos/14756754/pexels-photo-14756754.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body className="card-body">
        <Card.Title className=''><font>Color Generator</font></Card.Title>
        <Card.Text className='mb-3 card-text'>
        This is a color bank that help users varying the shade of colors.
        </Card.Text>
        <Button className="mb-1" variant="outline-danger" href="https://lorem-ipsum-generator-pelz.netlify.app">View Demo</Button>
      </Card.Body>
    </motion.card>


       < motion.card className='shadow-lg mb-4 sharp' style={{ width: '16rem' }}
        whileHover={{scale:1.1}}
       transition={{duration:0.5}}
       >
      <Card.Img className="card-image"  variant="top" src="https://media.istockphoto.com/id/185313478/photo/cmyk-color-guide-and-lorem-ipsum-text.jpg?b=1&s=612x612&w=0&k=20&c=PhKKUDbQ9y31g54reb_0RTJfuTJRMIT4QGi3cDP8cK8=" />
      <Card.Body className="card-body">
        <Card.Title className=''><font>Lorem-Ipsum</font></Card.Title>
        <Card.Text className='mb-3 card-text'>
        This application renders already made paragraphs that
         could speed up development of demo websites
        </Card.Text>
        <Button className="mb-1" variant="outline-danger" href="https://lorem-ipsum-generator-pelz.netlify.app">View Demo</Button>
      </Card.Body>
    </motion.card> */}
  
 < Card maxW='sm' spacing='4'className='mb-3' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
      alt='Resort Beech'
      borderRadius='lg'
     
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'><font> Resort-beach Apps</font></Heading>
      <Text>
      This is an application that featured different classic rooms with 
      outstanding features and in affordable prices.
      </Text>      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Link href="https://react-pelz-resort-beach.netlify.app"style={{textDecoration:"none", marginInline:"auto"}}  >      
      <Button  className='card-footer'    text='center'>
        View Demo
      </Button>
    </Link>
  </CardFooter>
</Card>   


<Card maxW='sm' className='mb-3'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      alt=''
      borderRadius='lg'
      
    />
    <Stack mt='6' spacing='3' >
      <Heading size='md'> <font>Phone Shopping Cart</font></Heading>
      <Text>
      E-commerce application that made shopping 
      phones online easier with zero-stress
      </Text>      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Link  href="https://react-phone-shopping-cart-pelz.netlify.app"style={{textDecoration:"none", marginInline:"auto"}}  >      
      <Button   className='card-footer' text='center' >
        View Demo
      </Button>
    </Link>
  </CardFooter>
</Card>



  
 <Card maxW='sm' className='mb-3'>
  <CardBody>
    <Image
      src='https://images.pexels.com/photos/14756754/pexels-photo-14756754.jpeg?auto=compress&cs=tinysrgb&w=600'
      alt=''
      borderRadius='lg'
      
    />
    <Stack mt='6' spacing='3' >
      <Heading size='md'><font>Color Generator</font></Heading>
      <Text>
       This is a color bank that help users varying the shade of colors.
      </Text>      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Link href="https://color-generator-pelz.netlify.app" style={{textDecoration:"none", marginInline:"auto"}}>      
      <Button  className='card-footer'  text='center' >
        View Demo
      </Button>
    </Link>
  </CardFooter>
</Card>

 <Card maxW='sm' className='mb-3'>
  <CardBody>
    <Image
      src='https://media.istockphoto.com/id/185313478/photo/cmyk-color-guide-and-lorem-ipsum-text.jpg?b=1&s=612x612&w=0&k=20&c=PhKKUDbQ9y31g54reb_0RTJfuTJRMIT4QGi3cDP8cK8='
      alt=''
      borderRadius='lg'
      
    />
    <Stack mt='6' spacing='3'  >
      <Heading size='md'> <font>Lorem-Ipsum</font></Heading>
      <Text className='fs-md-1'>
       This application renders already made paragraphs that could speed up development of demo websites
      </Text>      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Link  href="https://lorem-ipsum-generator-pelz.netlify.app" style={{textDecoration:"none", marginInline:"auto"}}>      
      <Button   className='card-footer'   >
        View Demo
      </Button>
    </Link>
  </CardFooter>
</Card>


        </div>      
     
          </motion.div>
      
      
  
      
      </>

  )
}
