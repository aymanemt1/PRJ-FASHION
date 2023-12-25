import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import axios from 'axios';


export default function Review() {
const [productDetails,setProductDetails]=React.useState([])
const [TotalPrice,setTotalPrice]=React.useState()

    React.useEffect(() => {
    fetchCartProduct();

  }, []);
 

  const fetchCartProduct = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/cart');
      setProductDetails(response.data.productDetails);
  setTotalPrice(response.data.totalPrice);
     

    } catch (error) {
      console.error('Error fetching cart products:', error);
    }

  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productDetails.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <img src={`../../../images/shop/${product.image}`} width='55px' style={{marginRight:'10px'}}/>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {TotalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
        
       
        </Grid>
      </Grid>
    </React.Fragment>
  );
}