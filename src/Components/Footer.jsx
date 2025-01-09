import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container mt-5 w-100 " style={{height:'400px'}}>
        <div className="row ">
            <div className="col-lg-4">
                <h4>
                    <i className="fa-solid fa-music"></i> &nbsp;

                    Media Player</h4>
                    <p className='mt-4 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eveniet rerum obcaecati possimus illum, ad natus sint dolore fuga necessitatibus nisi rem nesciunt nobis eius cupiditate officia quis consequuntur quae.</p>
                    <p className='text-white'>Code is liscensed by Luminar</p>
                    <p className='text-white'>Currently v5.3.2</p>
            </div>
            <div className="col-lg-2">
                <div className='mt-4'>
                <h5>Links</h5>
                <Link className='text-decoration-none text-white' to={'/'}>Leading</Link><br />
                <Link className='text-decoration-none text-white' to={'/home'}>Home</Link><br />
                <Link className='text-decoration-none text-white' to={'/history'}>History</Link>
                </div>
            </div>
            <div className="col-lg-2">
                <h5>Guides</h5>
                <div className='mt-4'>
                <a href="" className='text-decoration-none text-white'>React</a><br />
                <a href="" className='text-decoration-none text-white'>React Bootstrap</a>
                <a href="" className='text-decoration-none text-white'>React Router</a>
                </div>
            </div>
            <div className="col-lg-4">
                <h5>Contact Us</h5>
                <div className='d-flex mt-4 '>
                    <input type="text" className='form-control' placeholder='enter email' />
                    <button className='btn btn-warning ms-3'> <i class="fa-solid fa-arrow-right"></i></button>

                </div>
                <div className="d-flex align-items-center justify-content-around mt-4 fs-5">
                    <a href="" className='text-white'><i class="fa-brands fa-facebook"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-twitter"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-github"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" className='text-white'><i class="fa-brands fa-instagram"></i></a>
                    <a href="" className='text-white'><i class="fa-solid fa-phone"></i></a>
                </div>

            </div>
        </div>
        <p className='text-center mt-4'>Copyright  © September 2024 Batch, media Player, Built with react </p>

    </div>
    </>
  )
}

export default Footer