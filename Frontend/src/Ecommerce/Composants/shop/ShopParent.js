
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { ProductsShop } from './ProductsShop'
import ScrollButton from '../BtnTop/scrollToTop';


export const ShopParent = () => {

	
	return (
		<>
			
			<div style={{ boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)" }}>
				<Header />
			</div>

			<div style={{ display: 'flex', justifyContent: 'space-between', width: "50%", padding: "40px 60px 0px 60px" }}>
			</div>
			<ProductsShop />
			<ScrollButton />
		</>

	);
}

