import React from 'react'
import Button from 'react-bootstrap/Button';
import music from '../assets/music gif.gif'
import music1 from '../assets/ms1-removebg-preview.png'
import music2 from '../assets/ms2-removebg-preview.png'
import music3 from '../assets/ms3.2-removebg-preview.png'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Landing() {
  return (
    <>
    <div className='container p-5' >
    <div className='row'> <br /><br />
      <div className='col-6 text-white'>
        <h1 style={{  fontFamily: 'Dancing Script'}}>Welcome to <span className='text-danger'>Media player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias culpa cumque obcaecati ullam numquam laboriosam commodi sed, aliquam deleniti, natus vitae sapiente repudiandae blanditiis ea corrupti rem eaque unde</p><br />
        <Link to={'/home'} className='btn btn-warning'>Get Started</Link>
      </div>
      <div className='col-6'>
        <img style={{width:'600px'}} src={music}  />
      </div>
    </div>
    </div>

    <div className='container p-5 align-items-center'>
      <h1 style={{  fontFamily: 'Dancing Script',color:'yellow', textAlign:'center',  gap:'1.5rem'}}>Features</h1> <br /> <br />
    <div className='row'>
      <div className='col-4'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={music1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         Users can upload and remove the videos
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={music2} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can categirize the video by drag anddrop videos
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className='col-4'>
      <Card style={{ width: '20rem',height:'450px'  }}>
      <Card.Img variant="top" src={music3}/>
      <Card.Body> <br /> <br /> <br />
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manbage the watch history of all videos
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    </div>
    </div>

    <div className='container p-5 border border-white border-3 rounded'>

      <div className='row'>
        <div className='col-6'>
          <h1 style={{fontSize:'50px',color:'red'}}>simple Fast and Poweful</h1> <br /> <br />
          <p style={{color:'white'}}><span style={{fontWeight:'bold',fontSize:'22px'}}>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo, officiis quae animi voluptatem culpa harum quaerat quasi sapiente sunt! Assumenda ea rem consequuntur voluptate deserunt omnis est blanditiis architecto?</p>
          <p style={{color:'white'}}><span style={{fontWeight:'bold',fontSize:'22px'}}>Manage History: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo, officiis quae animi voluptatem culpa harum quaerat quasi sapiente sunt! Assumenda ea rem consequuntur voluptate deserunt omnis est blanditiis architecto?</p>
          <p style={{color:'white'}}><span style={{fontWeight:'bold',fontSize:'22px'}}>Play Everything: </span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quo, officiis quae animi voluptatem culpa harum quaerat quasi sapiente sunt! Assumenda ea rem consequuntur voluptate deserunt omnis est blanditiis architecto?</p>
        </div>
        <div className='col-6'>
        <iframe width="560" height="500" src="https://www.youtube.com/embed/L5pJbriJT98?si=jGedLZQnt-rzhuQK&amp;start=22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

    </div>

    </>
  )
}

export default Landing