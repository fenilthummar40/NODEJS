import React from 'react';

function NewsletterBox() {

    const onSubmitHandler =(event) =>{
        event.preventDefult();
    }

  return (
    <div className="text-center px-4">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptate voluptatum ex!
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded-lg pl-3 py-2">
        <input className="w-full sm:flex-1 outline-none text-gray-700"type="email"placeholder="Enter your email"required/>
        <button type="submit"className="bg-black text-white text-xs px-6 py-2 rounded-lg hover:bg-gray-800">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsletterBox;
