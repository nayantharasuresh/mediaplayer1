import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { addVideoAPI } from '../Services/AllApi';



function Add({setAddVideoResponse}) {
  const [videoDetails, setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  const [isInvalidYoutubeUrl,setIsInvalidYoutubeUrl]=useState(false)
  console.log(videoDetails);
  

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedUrl=(link)=>{
  

    if(link.includes("v=")){

      const videoId=link.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeUrl:` https://www.youtube.com/embed/${videoId}`})
      setIsInvalidYoutubeUrl(false)

    }
    else{
      setVideoDetails({...videoDetails,youtubeUrl:""})
      setIsInvalidYoutubeUrl(true)
    }
  }
  const handleUpload=async()=>{
    const {caption,imageUrl,youtubeUrl}=videoDetails
    if(caption && imageUrl && youtubeUrl){
      //console.log('api call');

      try{
        const result=await addVideoAPI(videoDetails)
        ///console.log(result);
        if(result.status>=200 && result.status<300){
          setAddVideoResponse(result.data)
          toast.success(`${result.data.caption} added successfully`)
          handleClose()
        }
        else{
          toast.success(`${result.response.data}`)
        }
        
      }
      catch(err){
          console.log(err);
          
      }
      
    }
    else{
      toast.warning("Please enter the fields completely")
    }
  }

  return (
    <>



    <div className=' p-5 d-flex justify-content-center '>
        <h5 className='text-warning'>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-danger ms-3 rounded-circle fw-bold'>+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <p>Please fill the following details</p>
        <div className='border border-3 border-warning rounded p-3'>
        <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
        <Form.Control onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Image Url" className="mb-3">
        <Form.Control onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text mb-5" placeholder="Image Url" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Youtube Url">
        <Form.Control onChange={(e)=>getEmbedUrl(e.target.value)} type="text " placeholder="Youtube Url" />
      </FloatingLabel>
      {
        isInvalidYoutubeUrl &&
      <div className='text-danger mt-3'>
        Invalid youtube url
      </div>}
      </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Add