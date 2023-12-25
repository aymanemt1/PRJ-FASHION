import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Alert, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/joy/Button';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';



export default function TemporaryDrawer(props) {
 
    const [productDetails, setProductDetails] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');

const {deletedItem,setdeletedItem} =React.useContext(ThemeContext)
const {auth,setAuth} =React.useContext(UserContext)

    useEffect(() => {
        fetchCartProduct();
    }, [props.addedtocart,deletedItem]);


    const fetchCartProduct = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/cart');
            setProductDetails(response.data.productDetails);
            setTotalPrice(response.data.totalPrice);
            
        } catch (error) {
            console.error('Error fetching cart products:', error);
        }
        
    };
     function deleteFromCart(id)  {

        const response =  axios.delete(`http://127.0.0.1:8000/api/DeleteCart/${id}`).then(response => {
            console.log('Item deleted:', response.data);
            setdeletedItem(!deletedItem)
          })
          .catch(error => {
            console.error('Error deleting item:', error);
          });
    
    };


    const handlRedirect =(id)=>{
       window.location.href = `/product-detail/${id}`;
    }


    return (
        <div>
          

            <Drawer
                anchor="right"
                open={props.active}
                onClose={() => props.setactive(false)}
            >
                <Box
                    sx={{
                        width: 340,
                        padding: 2,
                    }}
                >

                    <div >
                        <div  >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h4>Cart</h4>
                                <i onClick={() => props.setactive(false)} style={{ cursor: "pointer", fontSize: "22px" }} className="fa-solid fa-xmark"></i>
                            </div>

                            <div className="card-body">
                                {productDetails.length > 0 ? (
                                    <>
                                        {productDetails.map((cart) => (
                                            <div key={cart.id} style={{ marginBottom: "2px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "20px" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div style={{ margin: '10px 15px' }}>
                                                    
                                                       <img
                                                       style={{cursor:'pointer', borderRadius: '10px'}}
                                                       onClick={()=>handlRedirect(cart.prod_id)}
                                                            src={`../../../images/shop/${cart.image}`}
                                                            alt="Image"
                                                            width="85px"
                                                          
                                                        />
                                                      
                                                    </div>
                                                    <div>
                                                        <h5 style={{ color: 'rgb(123, 31, 162)' }}>{cart.name}</h5>
                                                        <p>
                                                            <b>Size:</b> {cart.size} <br />
                                                            <b>Price:</b> {cart.price} x {cart.quantity} 
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IconButton aria-label="delete" size="small">

                                                        <i
                                                            onClick={() => deleteFromCart(cart.id)}
                                                            className="fa-solid fa-trash"
                                                            style={{ color: '#9646DC', fontSize: '22px', cursor: "pointer", padding: "4px" }}
                                                        ></i>
                                                    </IconButton>
                                                </div>
                                            </div>
                                        ))}
                                        {

                                        }
                                        <Link to="/checkout">
                                            <Button endDecorator={<KeyboardArrowRight />} style={{
                                                backgroundColor: "rgb(123, 31, 162)",
                                                margin: '25px 0px 0px 0px',
                                                width:'100%'
                                            }}>
                                                Go to checkout ( {totalPrice} DH )
                                            </Button>
                                        </Link>
                                        {/* <Link to="/cartdetail">
                                            <Button endDecorator={<KeyboardArrowRight />} style={{
                                                backgroundColor: "rgb(123, 31, 162)",
                                                margin: '20px',
                                            }}>
                                               View detail
                                            </Button>
                                        </Link> */}
                                    </>
                                ) : (
                                    <>
                                        <div style={{ marginLeft: "10px" }}>


                                            <Alert className='mt-2' severity="info">No items in your cart</Alert>
                                            <p style={{ margin: '9px', textAlign: "center", opacity: "0.9", width: '280px' }}>Start shopping now,don't miss the trendy products</p>
                                            <Link to="/shop" className="text-light" style={{ textDecoration: "none" }} >
                                                <button style={{
                                                    textDecoration: 'none',
                                                    margin: "30px 0px 0px 0px",
                                                    backgroundColor: "rgb(123, 31, 162)",
                                                    border: "1px solid rgb(123, 31, 162)",
                                                    borderRadius: "5px",
                                                    width: "100%",
                                                    color: "white",
                                                    padding: "4px"
                                                }}>
                                                    Start shipping
                                                </button>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
