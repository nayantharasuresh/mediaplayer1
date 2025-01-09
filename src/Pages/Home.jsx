import React from 'react'
import Add from '../Components/Add'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import { useState } from 'react'


function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [delVideoResponse,setDelVideoResponse]=useState("")
  const [updateCategoryResponse,setUpdateCategoryResponse]=useState("")
  return (
    <>
     <div className='container'>
     <div className='container p-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
          <Link className='text-decoration-none text-warning fw-bold fs-5 p-5' to={'/history'}>Watch History</Link>
         
        </div>
      <div className='row container'>
        <div className='col-6'>
          <h1 className='text-danger fs-2'> All video</h1>
          <View addVideoResponse={addVideoResponse} delVideoResponse={delVideoResponse} setUpdateCategoryResponse={setUpdateCategoryResponse} />
        </div>
        <div className='col-6'>
          <Category setDelVideoResponse={setDelVideoResponse} updateCategoryResponse={updateCategoryResponse} />
        </div>
      </div>
     </div>
    
    </>
  )
}

export default Home