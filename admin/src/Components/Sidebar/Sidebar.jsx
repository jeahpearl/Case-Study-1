import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
//import edit_product_icon from '../../assets/Edit.svg' //edit
import list_product_icon from '../../assets/Product_list_icon.svg'
import dashboard_icon from '../../assets/Dashboard_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/dashboard'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={dashboard_icon} alt="" />
            <p>Dashboard</p>
        </div> 
        </Link>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div> 
        </Link>
        {/* <Link to={'/editproduct'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Edit Product</p>
        </div> 
        </Link> */}
        <Link to={'/listproduct'} style={{textDecoration:"none"}}> 
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div> 
        </Link>
    </div>
  )
}

export default Sidebar