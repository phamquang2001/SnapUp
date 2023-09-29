import React, { useEffect } from "react";
import "./HomePage.scss";
import HeaderSlider from "../../Slider/HeaderSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApiProduct,
  fetchApiProductSingle,
  getApiProduct,
  getApiProductSingle,
} from "../store/productSlice";
import { selectCategories } from "../store/categorySlice";
import ProductList from "../../ProductList/ProductList";
function HomePage(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const products = useSelector(getApiProduct);
  useEffect(() => {
    dispatch(fetchApiProduct(50));
  }, []);
  const cartProductsOne = []
  for(let index in products){
    if(products[index].category === categories[0]){
        cartProductsOne.push(products[index])
      }
  }
  const cartProductsTwo = []
  for(let index in products){
    if(products[index].category === categories[1]){
      cartProductsTwo.push(products[index])
      }
  }
  const cartProductsThree = []
  for(let index in products){
    if(products[index].category === categories[2]){
      cartProductsThree.push(products[index])
      }
  }
  const cartProductsFour = []
  for(let index in products){
    if(products[index].category === categories[3]){
      cartProductsFour.push(products[index])
      }
  }
  
  
  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3>SEE OUR PRODUCTS</h3>
          </div>
        </div>
        <ProductList products={products.slice(0,10)} />
      </div>
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3 className="text-uppercase">{categories[0]}</h3>
          </div>
        </div>
        <ProductList products={cartProductsOne} />
      </div>
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3 className="text-uppercase">{categories[1]}</h3>
          </div>
        </div>
        <ProductList products={cartProductsTwo} />
      </div>
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3 className="text-uppercase">{categories[2]}</h3>
          </div>
        </div>
        <ProductList products={cartProductsThree} />
      </div>
      <div className="main-container">
        <div className="categories">
          <div className="title-main">
            <h3 className="text-uppercase">{categories[3]}</h3>
          </div>
        </div>
        <ProductList products={cartProductsFour} />
      </div>
    </main>
  );
}

export default HomePage;
