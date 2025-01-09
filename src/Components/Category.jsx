import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal, Form } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';







function Category({ setDelVideoResponse, updateCategoryResponse }) {
  const [catdata, setcatdata] = useState("")
  const [allcategory, setallcategory] = useState([])
  console.log(allcategory);
  console.log(catdata);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    categoryfunc()
  }, [updateCategoryResponse])


  const handlecategory = async () => {




    if (catdata) {

      try {

        const result = await addCategoryAPI({ catdata, allvideos: [] })
        console.log(result);
        toast.success(`${catdata} added successfully`)
        //setcatdata("")
        handleClose()
        categoryfunc()

      } catch (error) {
        console.log(err);

      }




    }
    else {
      toast.warning("Enter the Category name")

    }




  }



  const categoryfunc = async () => {


    try {

      const res = await getCategoryAPI()
      //console.log(res);
      setallcategory(res.data)
      console.log(allcategory);
      console.log("bb");





    } catch (error) {
      console.log("error");

    }

  }
  const deletecat = async (id) => {


    await deleteCategoryAPI(id)
    categoryfunc()

  }

  const videoDroped = async (e, catId) => {
    console.log(`video drop with category id ${catId}`);
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId);


    try {
      const { data } = await getSingleVideoAPI(videoId)
      console.log(data);

      const selectedCategory = allcategory?.find(item => item.id == catId)
      console.log(selectedCategory);

      selectedCategory.allvideos.push(data)
      console.log(selectedCategory);

      await updateCategoryAPI(catId, selectedCategory)
      categoryfunc()
      const result = await deleteVideoAPI(videoId)
      setDelVideoResponse(result.data)





    }
    catch (err) {
      {
        console.log(err);

      }
    }


  }
  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const videoDraged = (e, catDetails, videoDetails) => {
    const shareData = { catDetails, videoDetails }
    e.dataTransfer.setData("shareData", JSON.stringify(shareData))

  }



  return (
    <>
      <h4 style={{ color: 'orange' }}>All Category <span><button onClick={handleShow} className=' btn btn-warning rounded-circle'>+</button></span></h4>



      {
        allcategory?.length > 0 ?

          allcategory.map(cat => (

            <div onDragOver={(e) => dragOverCategory(e)} droppable={true} onDrop={(e) => videoDroped(e, cat?.id)} style={{ width: '500px' }} className='border rounded border-3 p-3 my-5 info '>



              <div className='d-flex justify-content-between'>
                <h5 style={{ color: 'white' }}>{cat.catdata}</h5>

                <Button onClick={() => deletecat(cat.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>



              </div>
              {

                cat?.allvideos?.length > 0 &&

                <div className='row'>
                  {
                    cat?.allvideos?.map(video => (
                      <div draggable={true} onDragStart={(e) => videoDraged(e, cat, video)} className="col-lg-6">
                        <VideoCard inSideCategory={true} displayData={video} />
                      </div>
                    ))
                  }


                </div>
              }
            </div>

          ))
          :

          <div className='text-danger'>no category added yet</div>

      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name">
            <Form.Control
              onChange={e => setcatdata(e.target.value)}
              type="text"
              placeholder="Enter category name"

            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handlecategory} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category