import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

export const RelatedProd = (props) => {
  const { modeColor, modeBackground, styleDark } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(0); // Start from the first page (0)
  const itemsPerPage = 4; // Number of items to display per page

  const handleClick = (productId) => {
    window.location.href = `/product-detail/${productId}`;
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = props.relatedProduct.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(props.relatedProduct.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
  };

  return (
    <div className="parentRelated">
      <h4 >Related Product</h4>
      <div className="related" >
        <button id='btnpaginateleft' className="pagination-button" onClick={handlePrevPage}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {visibleProducts.map((prodCat) => (
        
            <div style={{ width: '13rem', padding: "2px", ...styleDark }}  key={prodCat.id} id="monCart" className='card'>
                
              <div className="text-center">
                <Link to={`/product-detail/${prodCat.id}`} onClick={() => handleClick(prodCat.id)} >
                  <img src={`../../../images/shop/${prodCat.image}`} className="w-100 card-img-top image-hover p-2" style={{ borderRadius: 17 }} alt="Image" />
                </Link>
              </div>
              <div>
                <h6 className={`card-title px-3 text-capitalize ${modeColor}`} style={{ display: 'flex', justifyContent: 'space-between', margin: '2px 0px 0px 6px' }}><b>{prodCat.name} </b><span style={{ color: 'rgb(123, 31, 162)' }}>{prodCat.price} DH</span></h6>
                <p className={`${modeColor}`} style={{ padding: '5px 0px 0px 20px' }}>Lorem ipsum dolor sit  </p>
              </div>
            </div>
          
        ))}
        <button id='btnpaginateright' className="pagination-button" style={{ margin: "90px 30px 0 0" }} onClick={handleNextPage} disabled={currentPage === Math.ceil(props.relatedProduct.length / itemsPerPage) - 1}>
          <i  className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
