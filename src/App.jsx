
import { Route, Routes } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';




function App() {
  

  return (
    <>

<ToastContainer
position="top-right" theme="colored"/>
    <Header/>
    

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={ <Home/>}/>
      <Route path='/history' element={ <History/>}/> 
    </Routes>

    <Footer/>
  
    </>
  )
}

export default App
