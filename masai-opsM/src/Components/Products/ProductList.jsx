import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./api";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css"

// create Product component which contains the list of ProductItem component
const ProductList = ({productData}) => {

 

  return (
    <div data-testid="products-container" className={styles.products} >

            {
              productData.map((elem)=>(
                <ProductItem key={elem.id} image={elem.image} brand={elem.brand}
                 price={elem.price} title={elem.title} category={elem.category} />
              ))
            }  

    </div>


    );
};

// export
export default ProductList;
