import React from 'react';
import "./ProductList.scss"
import Product from '../Product/Product';
function ProductList(props) {
    const {products} = props
    return (
        <div className="list-product">
            {products.map(product =>{
                let discountPrice = ((product.price) - (product.price * product.discountPercentage / 100))?.toFixed(2)
                return (
                    <div className='item-product'>
                        <Product
                        key = {products.id}
                        product = {{...product, discountPrice}}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default ProductList;