import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  CategoryProduct,
  CartPage,
  SearchPage,
  ProductSinglePage,
} from "./components/pages/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./components/pages/store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product/:id" element={<ProductSinglePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/product/category/:category" element={<CategoryProduct/>}/>
            <Route path="/search/:searchTerm" element={<SearchPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
