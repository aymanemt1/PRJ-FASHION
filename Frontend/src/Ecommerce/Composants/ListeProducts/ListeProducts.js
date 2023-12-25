import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import Paginate from './Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { CartFetch } from '../../Redux/actionCart';
import { ThemeContext } from '../../Context/ThemeContext';


export const ListeProducts = () => {  
  const {modeColor,modeBackground,styleDark} =useContext(ThemeContext)
    
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [IsHeart, setIsHeart] = useState(false)
    const [favoritedProducts, setFavoritedProducts] = useState([]);

    const [value, setValue] = useState('one');
    const [statu, setStatu] = useState('all')

    const handleChange = (event, newValue) => {
        if (newValue === 'one' || newValue === "") {
            setValue(newValue);
            setStatu('all');
        } else if (newValue === 'two') {
            setValue(newValue);
            setStatu('best');
          } else if (newValue === 'three') {
            setValue(newValue);
            setStatu('new'); 
        }       
      };

     
    const fetchData = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8000/api/products?page=${currentPage}`);
              setCount(response.data.productCount)
              console.log(response)
              setProducts(response.data.products.data);
             
            //   setCurrentPage(pageNumber);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };

         useEffect(() => {
            fetchData();
        }, [])

        useEffect(() => {
            if (statu === 'best' || statu === 'new') {
              const filtered = products.filter((prod) => prod.status === statu);
              setFilteredProducts(filtered);
            } else if (statu === 'all') {
              setFilteredProducts(products);
            }
          }, [statu, products]);
    
          const handleHeart = (id) => {
    const isFavorited = favoritedProducts.includes(id);

    if (isFavorited) {
      const updatedProducts = favoritedProducts.filter((productId) => productId !== id);
      setFavoritedProducts(updatedProducts);
    } else {
      setFavoritedProducts([...favoritedProducts, id]);
    }
  };


   // pour pagination 
 const [count, setCount] = useState();
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 16;

 useEffect(() => {
   if (Array.isArray(products) && products.length > 0) {
     const startIndex = (currentPage - 1) * itemsPerPage;
     const endIndex = startIndex + itemsPerPage;
     const slicedProducts = products.slice(startIndex, endIndex);
     setFilteredProducts(slicedProducts);
   }
 }, [currentPage, products, itemsPerPage]);
 
 const handlePageChange = (event, page) => {
   setCurrentPage(page);
 };

 const totalPages = Math.ceil(count / itemsPerPage);
 console.log(totalPages)
 console.log(count)
 console.log(itemsPerPage)
 
 return (
        <Box sx={{ width: '100%' }}>
        <div className='container ' >

<div className='exulisev'>
<h3 >Exclusive Products</h3>

<p > Explore our exclusive range of products crafted with precision and designed for the discerning individual</p>
</div>
  <div id="tabPaginate">
     
 <div className='tabs'>
 <Tabs
      value={value}
      onChange={handleChange}
      textColor={modeColor}
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="All" />
      <Tab value="two" label="Popular" />
      <Tab value="three" label="New Arrivals" />

    </Tabs>
 </div>
 
    <Paginate currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />

 
  
  </div>

            <div id="parent" className="d-flex justify-content-evenly" style={{ flexWrap: "wrap" }}>
                {
                    filteredProducts.map((prod) => (
                        <div key={prod.id} data-aos="zoom-in-up" data-aos-duration="600" style={{...styleDark}} className={`card mt-5 ${modeBackground}`} >
                            <Link to={`product-detail/${prod.id}`} style={{ display: "block", position: "relative" }}>

                                <img src={`images/shop/${prod.image}`} className="w-100 card-img-top image-hover p-2" style={{ borderRadius: "10px" }} alt="Image" useMap="#productMap" />
                                <map name="productMap">
                                    <area shape="rect" coords="122,122,270,400" href="" alt="Product Detail" />
                                </map>
                            </Link>

                            <div className="icon-overlay" style={{ width: "140px" }}>
                                <i onClick={()=>handleHeart(prod.id)} style={{ fontSize: "14px"}} className={favoritedProducts.includes(prod.id)?" fa-solid fa-heart heart" : "fa-regular fa-heart "}  />
                                <Link to={`product-detail/${prod.id}`} ><i style={{ fontSize: "14px" ,margin:"0 6px"}} className="fa-solid fa-eye" /></Link>
                            </div>


                            <h6 className={`card-title px-3 text-capitalize ${modeColor}`} style={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 0px 6px " }}><b>{prod.name} </b><span style={{ color: "rgb(123, 31, 162)" }}>{prod.price} DH</span></h6>
                            <p className={`${modeColor}`} style={{ margin: "2px 0px 0px 20px" }}>Lorem ipsum dolor sit amet consectetur   </p>
                            <div className="card-body">


                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
</Box>
    )
}
