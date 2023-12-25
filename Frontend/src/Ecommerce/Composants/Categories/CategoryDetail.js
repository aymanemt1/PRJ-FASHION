import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loading } from '../loading/Loading';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

export const CategoryDetail = () => {

  const {modeColor,modeBackground,styleDark} =useContext(ThemeContext)

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/CategoryShow');
        const { categories, products } = response.data;

        setCategories(categories);
        setProducts(products);

        const filtered = products.filter((prod) => prod.id_categorie == id);
        setProductsFiltered(filtered);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
    <Header />
    <div className='catDetail'>

    
    <div id="parent" className="d-flex justify-content-evenly" style={{ flexWrap: "wrap" }}>
    {productsFiltered.length > 0 ? (
  productsFiltered.map((prod) => (
    <div
      key={prod.id}
      data-aos="zoom-in-up"
      data-aos-duration="600"
      style={{...styleDark}} 
      className={`card mt-5 ${modeBackground}`} 
    >
      <Link to={`product-detail/${prod.id}`} style={{ display: "block", position: "relative" }}>
        <img
          src={`../../../images/shop/${prod.image}`}
          className="w-100 card-img-top image-hover p-2"
          style={{ borderRadius: "10px" }}
          alt="Image"
        />
      </Link>
      <h6 className={`card-title px-3 text-capitalize ${modeColor}`} style={{ display: "flex", justifyContent: "space-between", margin: "2px 0px 0px 6px " }}>
        {prod.name} <span style={{ color: "rgb(123, 31, 162)" }}>{prod.price} DH</span>
      </h6>
      <p className={`${modeColor}`} style={{ margin: "2px 0px 0px 20px" }}>Lorem ipsum dolor sit amet consectetur</p>
      <div className="card-body">
     
      </div>
    </div>
    
  ))
) : (
  <Loading />
)}
</div>

            </div>
      </>
  );
};
