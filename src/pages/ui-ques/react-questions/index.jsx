import { createContext, useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import jsonData from "./json/shopping-cart.json";
import "./styles/shopping-cart.css";

// context
const ProductContext = createContext()
const useProducts = ()=>useContext(ProductContext)

// cart
const Cart = ()=>{
  return <div>
    <h1>Cart page</h1>
  </div>
}

// home
const Home = ()=>{
  const {data, data:{products}, addItemsToCart} = useProducts();
  console.log(data)
  return <div className="products-page-container">
      <div className="product-card-list">
        {products?.map((item)=>
        <div key={item.id} className="product-card">
           <div className="product-content">
            <img className="product-image" src={item.image} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <p className="product-rating">{item.rating}</p>
            <p className="product-price">{item.price}</p>
            <p className="product-status">{item.status}</p>
          </div> 
          <button 
            onClick={()=>addItemsToCart(item)}
            disabled={item.status === "out-of-stock"} 
            className="product-cta"
            >Add To Cart
            </button>
        </div>)}
      </div>
  </div>
}


// reducer
const INITITAL_STATE = {
  cart:[], // ! needs quantity too
  products: []
}

const reducerFn = (state, action)=>{
  switch (action.type){
    case "FETCH_PRODUCTS":
      return {...state, products: action.payload.data};
    case "ADD_TO_CART":
      const currentItem = action.payload;
      const prevCart = state.cart;
      
      return {...state};
    case "MINUS_TO_CART":
      return {...state, };
    case "FILTER_PRODUCTS":
      return {...state, };
    default:
      return {...state};
  }
}

const ProductProvider = ({children})=>{
  
  const [productState, dispatch] = useReducer(reducerFn, INITITAL_STATE);

  useEffect(()=>{
    dispatch({type:"FETCH_PRODUCTS", payload:{data: jsonData}})
  },[])

  const addItemsToCart = (item)=>{
    console.log("item", item)
    dispatch({
      type: "ADD_TO_CART",
      payload: {...item}
    })
  }

  return <ProductContext.Provider value={{data: productState, addItemsToCart}}>
    {children}
  </ProductContext.Provider>
}

const App = ()=>{


  return <ProductProvider> 
      <BrowserRouter>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  </ProductProvider>
}

export default App