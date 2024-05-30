// import React, { useEffect, useState } from 'react';
// import './EditProduct.css';

// const EditProduct = () => {
//     const [allProducts, setAllProducts] = useState([]);

//     const fetchInfo = async () => {
//         await fetch('http://localhost:4000/allproducts')
//         .then(res => res.json())
//         .then(data => setAllProducts(data));
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     const handleEdit = (index, field, value) => {
//         const newProducts = [...allProducts];
//         newProducts[index][field] = value;
//         setAllProducts(newProducts);
//     };

//     const saveChanges = async (product) => {
//         await fetch(`http://localhost:4000/updateproduct/${product.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product)
//         });
//         await fetchInfo();
//     };

//     return (
//         <div className='edit-product'>
//             <h1>All Products Edit</h1>
//             <div className="editproduct-format-main">
//                 <span>Products</span>
//                 <span>Title</span>
//                 <span>Old Price</span>
//                 <span>New Price</span>
//                 <span>Category</span>
//                 <span>Save</span>
//             </div>
//             <div className="editproduct-allproducts">
//                 {allProducts.map((product, index) => (
//                     <div key={product.id} className="editproduct-format-main editproduct-format">
//                         <img src={product.image} alt="" className="editproduct-product-icon" />
//                         <input type="text" value={product.name} onChange={(e) => handleEdit(index, 'name', e.target.value)} />
//                         <input type="number" value={product.old_price} onChange={(e) => handleEdit(index, 'old_price', e.target.value)} />
//                         <input type="number" value={product.new_price} onChange={(e) => handleEdit(index, 'new_price', e.target.value)} />
//                         <input type="text" value={product.category} onChange={(e) => handleEdit(index, 'category', e.target.value)} />
//                         <button onClick={() => saveChanges(product)}>Save</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default EditProduct;
