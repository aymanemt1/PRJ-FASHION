import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Loading } from '../loading/Loading';
import { RelatedProd } from './RelatedProd';
import axios from 'axios';
import { ProductDetail} from './ProductDetail'
import { useParams } from 'react-router';
import { Footer } from '../footer/footer';
import ProductsInfo from './ProductInfo';

export const DetailsParent = () => {
  const { id } = useParams();
  
  const [sizes, setsizes] = useState([]);
  const [res, setRes] = useState([]);
  const [relatedCategory, setRelatedCategory] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/product-detail/${id}`);
      const CatId = response.data.product.id_categorie;
      const products = response.data.allProducts;
      const filteredCat = products.filter((prod) => prod.id_categorie === CatId);
  
      setsizes(response.data.productSize)
      setRelatedCategory(filteredCat);
      setRelatedProduct(response.data.related_products.data);
      setRes(response.data.product);


    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
    
        {Object.keys(res).length > 0 ? (
          <>
            <ProductDetail sizes={sizes} relatedCategory={relatedCategory} res={res} id={id} />
          <div  className='container px-5 mt-5'>
            <ProductsInfo />
            <RelatedProd relatedProduct={relatedProduct} fetchData={fetchData} />
          </div>
            <Footer />
      </>
        ) : (
          <Loading />
        )}
    </>
  );
};
