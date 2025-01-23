import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "RS.";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const navigate = useNavigate();


  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);


  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    const cartData = { ...cartItem };

    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItem(cartData);
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const size in cartItem[items]) {
        totalCount += cartItem[items][size] || 0;
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    const cartData = { ...cartItem };

    if (quantity > 0) {
      cartData[itemId][size] = quantity;
    } else {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    }

    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update',{itemId, size, quantity},{headers:{token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      const itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) continue;
      for (const size in cartItem[items]) {
        totalAmount += itemInfo.price * (cartItem[items][size] || 0);
      }
    }
    return totalAmount;
  };


  const getProductsData = async () => {
    try {
      const respose = await axios.get(backendUrl + '/api/product/list')
      if (respose.data.success) {
        setProducts(respose.data.products)
      } else {
        toast.error(respose.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getUserCart = async (token)=>{
    try {
      
      const respose = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})

        if (respose.data.success) {
          setCartItem(respose.data.cartData)
        }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  
  useEffect(() => {
    getProductsData()
  }, [])

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }
  })




  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    setCartItem,    
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
