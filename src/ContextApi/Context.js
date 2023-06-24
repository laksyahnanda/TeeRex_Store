import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
  } from "react";
  import configObj from "../config";
  import { CartReducer, ProductReducer } from "./Reducer";
  
  const Cart = createContext();
  
  const Context = (props) => {
    const [cart, setCart] = useState([]);
  
    const [state, dispatch] = useReducer(CartReducer, {
      products: [],
      cart: [],
    });
  
    useEffect(() => {
      const cartStorage = JSON.parse(localStorage.getItem("cartStorage"));
      if (cartStorage) {
        setCart(cartStorage);
      }
    }, []);
  
    const [productState, productDispatch] = useReducer(ProductReducer, {
      colour: [],
      gender: [],
      price: [],
      type: [],
      searchQuery: "",
    });
  
    const getData = async () => {
      try {
        const response = await fetch(configObj.BASE_URL);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      const onLoadHandler = async () => {
        const productsData = await getData();
        dispatch({
          type: "INIT",
          payload: {
            products: productsData,
            cart: cart,
          },
        });
      };
      onLoadHandler();
    }, [cart]);
  
    return (
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {props.children}
      </Cart.Provider>
    );
  };
  
  export default Context;
  
  export const CartState = () => {
    return useContext(Cart);
  };