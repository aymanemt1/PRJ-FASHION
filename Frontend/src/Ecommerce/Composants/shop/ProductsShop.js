import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Loading } from '../loading/Loading';
import { Footer } from '../footer/footer';
import Paginate from './Paginate';
import { ThemeContext } from '../../Context/ThemeContext';
import Alert from '@mui/material/Alert';



export const ProductsShop = () => {

	 const {modeColor,modeBackground,styleDark} =useContext(ThemeContext)

     const [products, setProducts] = useState([]);
     const [filteredProducts, setFilteredProducts] = useState([]);
     const [Categories, setCategories] = useState([]);
     const [sizes, setsizes] = useState([]);
	
     const [productName, setProductName] = useState('');
     const [selectedCategory, setSelectedCategory] = useState('');
     const [size, setSize] = useState("");
    
    const [priceFrom, setpriceFrom] = useState(0);
    const [priceTo, setpriceTo] = useState(0); 

    const [message, setmessage] = useState(""); 
       
  
    useEffect(() => {
      fetchData();
      
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/shop?page=${currentPage}`);
        console.log(response)
        setCount(response.data.productCount);
        setProducts(response.data.products.data);
        setCategories(response.data.categories);
        setsizes(response.data.productSize);
        setFilteredProducts(response.data.products.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    //filterNameSize
  
    useEffect(() => {
        filteredProductsFunct();
      }, [productName,size]);

    const filteredProductsFunct = () => {
      let filtered = [...products];
  
      if (productName !== '') {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));
      }
      

      if (size !== '') {
        filtered = filtered.filter(product => product.size_id == size);
      }
  
      setFilteredProducts(filtered);
    };

 console.log(size)
    //filterPrices

    useEffect(() => {
        filteredProductsFunctPrice();
      }, [ priceFrom,priceTo]);
  
    const filteredProductsFunctPrice = () => {
      let filtered = [...products];
      
      if (priceFrom !== '' && priceTo !== '') {
        filtered = filtered.filter(product => product.price >= parseFloat(priceFrom) && product.price <= parseFloat(priceTo));
      }
      setFilteredProducts(filtered);
    };
    
    //filterCategories

    useEffect(() => {
        filteredProductsFunctCat();
      }, [selectedCategory]);

    const filteredProductsFunctCat = () => {
        let filtered = [...products];
        if (selectedCategory !== '') {
            filtered = filtered.filter(product => product.id_categorie == selectedCategory); 
        };
        
        setFilteredProducts(filtered);
    }

 // pour pagination 
 const [count, setCount] = useState();
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 18;


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

  return (
   
    <div id='shopParent'>

     {count > 0 ? (
        <>
        <div id='headShop'>

     <h6 > We have a {count} products</h6> 
     <Paginate currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
		<div id='shop'>		
        {filteredProducts.length === 0 ? (
 <div style={{width:'60%',margin:"40px 0 0 100px"}}>
<Alert severity="info">No products available!</Alert>
 </div>

        ) : ''}
        <div id='parent'  style={{flexWrap:"wrap",justifyContent:"space-evenly",display:"flex",paddingLeft:"50px"}}>
        {
        filteredProducts.map((prod) => (
                <div style={{...styleDark}} data-aos="fade-right" data-aos-offset="300" data-aos-duration="500" className={`card mt-5 ${modeBackground}`} >
                    <Link to={`product-detail/${prod.id}`} style={{ display: "block", position: "relative" }}>

                        <img src={`images/shop/${prod.image}`} className="w-100 card-img-top image-hover p-2" style={{ borderRadius: "10px" }} alt="Image" useMap="#productMap" />
                        <map name="productMap">
                            <area shape="rect" coords="122,122,270,400" href="" alt="Product Detail" />
                        </map>
                    </Link>

                    <div className="icon-overlay" style={{ width: "140px" }}>
                        <i style={{ fontSize: "14px" }} className="fa-regular fa-heart" />
                        <Link to={`product-detail/${prod.id}`} ><i style={{ fontSize: "14px", margin: "0 6px" }} className="fa-solid fa-eye" /></Link>
                    </div>

                    <h6 className={`card-title px-3 text-capitalize ${modeColor}`} style={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 0px 6px " }}><b>{prod.name}</b> <span style={{ color: " rgb(123, 31, 162)" }}>{prod.price} DH</span></h6>
                    <p className={`${modeColor}`} style={{ margin: "2px 0px 0px 20px" }}>Lorem ipsum dolor sit amet consectetur   </p>
                    <div className="card-body">


                    </div>
                </div>
            ))
        }
        </div>
        <div>
           
    <div style={{width:"310px",...styleDark}}   className={`filter card ${modeBackground} ${modeColor}`}>
        <form>
            <div className=" card-header border-bottom pt-3 pb-3 mb-0 font-weight-bold " >
                <div style={{ display: "flex", justifyContent: "space-between" }}>Product's Name <i id="icon" onclick='toggleName()' className="fa-solid fa-minus"></i></div>
            </div>
            <div className="card-body " id="name">
                <div className="form-group my-2">
                    <input onChange={(e) => setProductName(e.target.value)} type="text" name="nameProd" className='form-control' placeholder="Enter the name of Product" />

                </div>
            </div>
            <div className=" card-header border-bottom pt-3 pb-3 " >
                <div style={{ display: "flex", justifyContent: "space-between" }}>Product's Category<i id="icon" onclick='toggleCategory()' className="fa-solid fa-minus"></i> </div>
            </div>
            <div className="card-body " id="category">
                <div className="form-group my-2">

                    <select onChange={(e) => setSelectedCategory(e.target.value)} name="categorie" className="form-control">
                        <option value="" selected disabled >Chosse a category</option>
                        {Categories.map((cat) => (

                            <option value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            </div>
           
            <div className="card-header border-bottom pt-3 pb-3 mb-0 font-weight-bold ">
                <div style={{ display: "flex", justifyContent: "space-between" }}>Product's Size<i id="icon" onclick='toggleFilterSize()' className="fa-solid fa-minus"></i> </div>

            </div>
            <div className="card-body" id="size">


                <div className="form-group mt-2">
                    <select onChange={(e) => setSize(e.target.value)} name="size" className="form-control">
                        <option value="" selected disabled >Chosse a size</option>
                       {sizes.map((size)=>(
                        
                        <option value={size.id} >{size.name}</option>
                       
                       ))}

                    </select>
                </div>

            </div>
            <div className="card-header border-bottom pt-3 pb-3 mb-0 font-weight-bold ">
                <div style={{ display: "flex", justifyContent: "space-between" }}>Product's Price<i id="icon" onclick='toggleFilterPrice()' className="fa-solid fa-minus"></i> </div>

            </div>
            <div className="card-body" id="price">

                <div className="form-group">

                    <input onChange={(e) => setpriceFrom(e.target.value)} type="text" className="form-control" name="priceFrom" placeholder="From" />

                    <input onChange={(e) => setpriceTo(e.target.value)} type="text" className="form-control mt-3" name="priceTo" placeholder="To" />
                </div>
            </div>
        </form>
    </div>
        </div>
  
    </div>
    <Footer />
    </>
     ):(
        <Loading />
     )}
    </div>



  )
}



