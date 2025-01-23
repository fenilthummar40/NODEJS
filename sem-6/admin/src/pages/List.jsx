import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { currency } from '../App';

const backendUrl = 'http://localhost:4000';

function List({ token }) {
  const [list, setList] = useState([]); // Corrected to use useState

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };


  const removeProduct = async (id) => {
    if (!token) {
      toast.error("Token is required for this action.");
      return;
    }

    if (!id) {
      toast.error("Invalid product ID.");
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data?.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    }
  };



  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Product List</p>
      <div className='flex flex-col gap-2'>
        {/* list table title */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* product list */}

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 border text-sm'
              key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}.{item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }


      </div>
    </>
  );
}

export default List;
