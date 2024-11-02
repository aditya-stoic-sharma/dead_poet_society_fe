import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Payment() {


  const backy = useNavigate();

  const cart =()=>{
    backy('/Cart');
  }
  return (
    <>
<header className='text-center sticky top-0 flex items-center justify-between h-14 m-auto bg-yellow-700 border z-10 border-black'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU'
              className='h-10 w-10 ml-5 cursor-pointer rounded-full'
              onClick={cart}
             
              alt=''
            />
            <h1 className='text-3xl font-serif'>Payment</h1>
            
            <div></div>
      </header>

    <div className='flex flex-col justify-center my-20 items-center space-y-20'>
      <div className=' bg-yellow-300 w-96 text-center h-10 rounded-3xl'>
        <p className=' text-2xl font-mono font-bold mt-1'>Grand Total: 100</p>
      </div>

      <div className='flex rounded-2xl flex-col  space-y-5 items-start bg-yellow-100 h-48 w-96 justify-center items-center'>
        <div className='flex space-x-3 items-center'>
          <label className='w-20'>Address</label>
          <textarea name="" id="" cols="30" rows="2" placeholder='Address' className='text-center'></textarea>
        </div>

        <div className='flex space-x-4 items-center'>
          <label className='w-20'>City</label>
          <input type="text" className=" h-10 w-60 rounded-lg text-center" placeholder='City' />
        </div>

        <div className='flex space-x-3 items-center'>
          <label className='w-20'>Pincode</label>
          <input type="text" className=" h-10 w-60 rounded-lg text-center" placeholder='Pincode' />
        </div>
      </div>

      <div className=" bg-yellow-300 w-96 h-10 text-center rounded-3xl transition-transform hover:scale-125 hover:cursor-pointer duration-200 hover:bg-yellow-700">
        <button className='mt-2'>Buy Now !!</button>
      </div>
    </div>


    <footer className=' sticky bottom-0 h-14  flex justify-center items-center bg-yellow-700'>
      <div className=' text-2xl font-serif font-semibold text-yellow-50' >
        Dead Poet Society - Thanks For Your Support 
      </div>
    </footer>
    </>
  );
}
