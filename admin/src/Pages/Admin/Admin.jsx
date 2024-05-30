import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import  { Routes,Route } from 'react-router-dom'
import VDashboard from '../../Components/Dashboard/Dashboard'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
// import EditProduct from '../../Components/EditProduct/EditProduct'


const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/dashboard' element={<VDashboard/>}/>  
          <Route path='/addproduct' element={<AddProduct/>}/>   
        {/* //  <Route path='/editproduct' element={<EditProduct/>}/>   */}
          <Route path='/listproduct' element={<ListProduct/>}/>   
        </Routes>
    </div>
  )
}

export default Admin