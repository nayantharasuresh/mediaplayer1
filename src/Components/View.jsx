import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'




function View({addVideoResponse,delVideoResponse, setUpdateCategoryResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")
  const[allVideos,setAllVideos]=useState([])
  console.log(allVideos);

  useEffect(()=>{
    getAllVideos()
  }, [addVideoResponse,deleteVideoResponse,delVideoResponse])

  const getAllVideos=async()=>{
    try{
      const result=await getVideoAPI()
      // console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideos(result.data)
      }
    }
    catch(err){
      console.log(err);
      
    }
  }
  const dragOverView=(e)=>{
    e.preventDefault()
  }
   const handleCategoryVideo=async(e)=>{
   const {catDetails,videoDetails}= JSON.parse(e.dataTransfer.getData("shareData"))
   console.log(catDetails,videoDetails);

   const updatedCategoryVidos=catDetails.allvideos.filter(video=>video.id!=videoDetails.id)
   const {id,catdata}=catDetails

   try{
   
    const result =await updateCategoryAPI(id,{id,catdata,allvideos:updatedCategoryVidos})
    console.log(`result :${result}`);
    if(result.status>=200 && result.status<300){
      setUpdateCategoryResponse(result.data)
      
     
    }
    const {caption,imageUrl,youtubeUrl}=videoDetails
    const resp= addVideoAPI({caption,imageUrl,youtubeUrl})
      getAllVideos()
    
    
   }
   catch(err){
    console.log(err);
    
   }
   
  }
  
  return (
    <>
    <Row className='mt-5' droppable={true}  onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCategoryVideo(e)}>
      {
        allVideos?.length>0 ?
        allVideos.map(video=>(
          <Col lg={4} md={6} ms={12}>
        <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        ))
        :
        <div className='text-danger fw-bold'>Nothing to display</div>
      }
        
    </Row>
    </>
  )
}

export default View