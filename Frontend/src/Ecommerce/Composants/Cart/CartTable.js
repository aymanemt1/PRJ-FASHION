import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../Theme/ThemeContext';


export const CartTable = (props) => {
  const { modeColor, modeBackground} = useContext(ThemeContext)
  const [totalPrice, setTotalPrice] = useState('');
  const styleDark = modeBackground === 'darkBackground' ? {backgroundColor:"rgb(26, 33, 56)",color:'white' } : {backgroundColor:"white"};
  const styleIcon = modeBackground === 'darkBackground' ? {backgroundColor:"rgb(26, 33, 56)",color:'#9646DC' } : {backgroundColor:"white"};

  
  return (
    <>

      <div className="container p-5">
        <table className="table w-100" >

          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Total (DH)</th>
            <th></th>
          </tr>  

          {props.productDetails.map((cart) => (
            <tr key={cart.id}>
              <td>
                <div className='d-flex' style={{...styleDark}}>
                  <div style={{ marginRight: '15px' }}>
                    <img
                      src={`IMAGES/shop/${cart.image}`}
                      className=""
                      style={{ borderRadius: '10px'}}
                      alt="Image"
                      width="83px"
                    />
                  </div>
                  <div >
                    <h5>{cart.name}</h5>
                    <b>Size: </b>
                    {cart.size}
                    <br />
                    <b>Color: </b>black
                  </div>
                </div>
              </td>
              <td>{cart.price}</td>
              <td>{cart.quantity}</td>
              <td>{cart.size}</td>
              <td>{cart.price * cart.quantity} DH</td>
              <td>
              <Link to={`/product-detail/${cart.prod_id}`} style={{...styleIcon}}>
                <i style={{ color: '#9646DC', fontSize: '25px', cursor: "pointer" }} 
                class="fa-solid fa-eye"></i></Link>
                <i onClick={() => props.deleteFromCart(cart.id)}
                  className="fa-solid fa-trash"
                  style={{ color: '#9646DC', fontSize: '25px', cursor: "pointer",...styleIcon}}
                ></i>

              </td>
            </tr>
          ))}

        </table>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <button className="mt-2" style={{ textDecoration: 'none' ,  
            marginLeft: "24px",
            backgroundColor:"rgb(123, 31, 162)",
            border:"1px solid rgb(123, 31, 162)",
            borderRadius: "5px",
            width: "140px",
            color: "white",
            padding: "6px"}}>
          <Link to="/shop" className="text-light" style={{textDecoration:"none"}} >
            Back to shipping
          </Link>
          
        </button>
      </div>
      <div>
      <Link to='/checkout'> <button id='checkout'>
                           CheckOut
                        </button></Link>
      </div>
      </div>
      </div>

    </>
  )
}
