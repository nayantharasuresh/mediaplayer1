import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/AllApi';




function History() {
  const [allHistory,setAllHistory]=useState([])
  console.log(allHistory);
  
  useEffect(()=>{
    getAllHistory()
  }, [])
  const getAllHistory=async()=>{
    try{
      const result=await getHistoryAPI()
      console.log(result);
      setAllHistory(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  const handleDeleteHistory=async(videoId)=>{
    try{
      await deleteHistoryAPI(videoId)
      getAllHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
    <div className='row container p-5'>
      <div className='col-6'>
        <h1 className='text-warning fs-3'>Watch History</h1>
      </div>
      <div className='col-6'>
       <Link className='text-decoration-none fw-bold' to={'/home'}> Back to <i className="fa-solid fa-house"></i> </Link>
      </div>
     
      
    </div>
    {
        allHistory?.length>0 ?
    <div className='container'>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Date and Time</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
          allHistory?. map((video,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{video.caption}</td>
          <td> <a href={video.youtubeUrl} target='_blank'>{video.youtubeUrl}</a></td>
          <td>{video.formattedDate}</td>
          <td><button onClick={()=>handleDeleteHistory(video?.id)} className='btn'><i className='fa-solid fa-trash' style= {{color: '#8f050c'}}></i></button></td>
        </tr>
          ))
        }
        
        
      </tbody>
      
    </Table>
    </div>
    :
    <div className='text-danger fw-bold my-5 container'>
        No vides watched yet
    </div>
      }

   

    </>
  )
}

export default History