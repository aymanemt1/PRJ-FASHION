import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Button } from '@mui/joy';
import { Add } from '@mui/icons-material';
import { Header } from '../Header/Header';
import { ThemeContext } from '../../Context/ThemeContext';



export const ProductDetail = (props) => {
	const {modeColor,modeBackground} =useContext(ThemeContext)
console.log(props.res.name)

    const [size, setsize] = useState('');
    const [quantity, setquantity] = useState(1);
    const [res, setres] = useState(props.res);

    const [message, setmessage] = useState();
    const [isReserved, setisReserved] = useState(false);

    const handleClick = (productId) => {
        window.location.href = `/product-detail/${productId}`;
      };

      //pour reservation
      const [addedtocart,setaddedtocart]=useState(false)
      
      const handlSub = (ev) => {
        ev.preventDefault();
    
        axios.get(`http://127.0.0.1:8000/api/cart`)
            .then((response) => {
                const existingProduct = response.data.productDetails.find((product) => product.prod_id === props.id);
    
                if (existingProduct) {
                    const updatedQuantity = existingProduct.quantity + quantity;
    
                    axios.put(`http://127.0.0.1:8000/api/updatecart/${existingProduct.id}`, {
                        quantity: updatedQuantity,
                    })
                    .then((updateResponse) => {
                        console.log(updateResponse);
                        setmessage(updateResponse.data.msgSuccess);
                        setaddedtocart(true);
                    })
                    .catch((updateError) => {
                        console.error('Error updating cart:', updateError);
                    });
                } else {
                    axios.get(`http://127.0.0.1:8000/api/addtocart/${props.id}`, {
                        params: {
                            prod_id: props.id,
                            quantity: quantity,
                            price: res.price,
                            discount: res.discount_price,
                            size: size,
                        },
                    })
                    .then((addResponse) => {
                        console.log(addResponse);
                        setmessage(addResponse.data.msgSuccess);
                        setaddedtocart(true);
                    })
                    .catch((addError) => {
                        console.error('Error adding to cart:', addError);
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching cart:', error);
            });
    };
    
  const handleSizeChange = (e,newSize) => {
    setsize(e.target.value)
    if (newSize !== "") {
      setisReserved(true);
    } else {
      setisReserved(false);
    }
  };

  const ClickableStyle = isReserved ? 'btnCart' :"btnCartHidden";


const imgSrc = `../../../images/shop/${res.image}`
  return (
    <div  >
      <div style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)" }}>
<Header message={message} addedtocart={addedtocart}  />
</div>
    <div >
      
              <div id='detail' style={{ borderRadius: "13px" }}>

                <div className="card-images">
              
              <img src={imgSrc} width="540px" style={{borderRadius:'10px'}} />
                </div>

                <div id='rightdetail'>
                
                  <h4 className="product-title mb-1">{res.name}</h4>
                  <p className={` w-75 mb-1 ${modeColor}`}>Lorem ipsum dolor sit amet tempore ipsam</p>
                  <div className="rating mb-1">
                    <div className="stars" >
                      <span style={{ color: 'orange' }} className="fa fa-star checked"></span>
                      <span style={{ color: 'orange' }} className="fa fa-star checked"></span>
                      <span style={{ color: 'orange' }} className="fa fa-star checked"></span>
                      <span style={{ color: 'orange' }} className="fa fa-star text-muted"></span>
                      <span style={{ color: 'orange' }} className="fa fa-star text-muted"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <p style={{fontWeight:"900px",fontSize:"27px"}}>{res.price} DH</p>
                  <p >{res.description}</p>
                  <p className="vote"><strong>91%</strong> of buyers enjoyed this product! </p>
                  
                  <form onSubmit={handlSub}>
                 
                    <div className="mb-2">
                      <b>  Sizes :</b>
                     <div className="d-flex">
  {props.sizes.map((size) => (
    <span key={size.id}>
      <label>
        {size.name}
        <input
          onChange={handleSizeChange}
          className="mx-2 form-check-input"
          value={size.id}
          name="size"
          type="radio"
        />
      </label>
    </span>
  ))}
</div>

                    </div>

                      <label htmlFor="quantitySelect" className="my-2 "><b> Select Quantity:</b></label>
                    <div className="d-flex form-group mb-3">
                      <input onChange={(e) => parseInt(setquantity(e.target.value))} type="number" name="quantity" max="5" min="1" value={quantity} className="form-control" style={{ width: "60px" }} />
                    <Button style={{marginLeft:"30px",backgroundColor:"rgb(123, 31, 162)"}} startDecorator={<Add />} data-placement="right" data-toggle="tooltip" 
                    disabled={!isReserved}  title={isReserved?"Get now" : "Make sure that you are chosing the size "} className={ClickableStyle} type="submit"  >
                      ADD TO CART
                      </Button>
                      

                    </div>
                     {message === 'Item has been added to your bag' ? (
 <Alert className=' w-75 mt-3' severity="success">{message}</Alert>
) : message === 'Item quantity has been updated in your bag' ? (
  <Alert className=' w-75 mt-3' severity="info">{message}</Alert>
) : null}

                  </form>


                </div>

              </div>
            </div>
            </div>
            
  )
}
