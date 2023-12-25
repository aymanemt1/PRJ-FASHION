// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Header } from '../Header/Header';
// import { Footer } from '../footer/footer';
// import { CarTotal } from './CarTotal';
// import { CartTable } from './CartTable';
// import { Loading } from '../loading/Loading';
// import { Alert } from '@mui/material';
// import { Link } from 'react-router-dom';

// export const Cart = () => {
//   const [productDetails, setProductDetails] = useState([]);
//   const [totalPrice, setTotalPrice] = useState('');


//   useEffect(() => {
//     fetchCartProduct();
//     deleteFromCart();

//   }, []);
 

//   const fetchCartProduct = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/cart');
//       setProductDetails(response.data.productDetails);
//       setTotalPrice(response.data.totalPrice);

//     } catch (error) {
//       console.error('Error fetching cart products:', error);
//     }

//   };

//   const deleteFromCart = async (id) => {
//     try {
//       console.log(id);
//     fetchCartProduct();
//       await axios.post(`http://127.0.0.1:8000/api/DeleteCart/${id}`);
//     } catch (error) {
//       console.error('Error deleting item from cart:', error);
//     }
//   };

//   return (
//     <>
//       <div style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)" }}>
//         <Header />
//       </div>
//       {productDetails.length > 0 ? (
//         <>
//           <div>
//             <CartTable productDetails={productDetails} deleteFromCart={deleteFromCart} />

//             <div className="row w-100 px-5 justify-content-evenly">
//               <CarTotal totalPrice={totalPrice} />
//             </div>
//             <Footer />
//           </div>
//         </>
//       ) : (
//       <Loading />
//       )

//       }

//     </>
//   );
// };
