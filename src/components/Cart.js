import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Payment from './Payment';


const books = [
  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  },
  {
    name: `THE edfrghj`,
    image: ``,
    price: `100`,
    language: `russian`
  },
  {
    name: `THE WHISPER`,
    image: ``,
    price: `14567`,
    language: `russian`
  }
]
export default function Cart() {



  


  const [total , settotal] = useState(100);



 

  const backy = useNavigate();

  const back = () => {
    backy('/Shabdkosh');
  };

  
  const payment =()=>{
    backy('/Payment');
  }

  


  return (
    <div>
      

      <header className='text-center sticky top-0  flex items-center justify-between h-14 m-auto bg-yellow-700 border border-black'>
        <img onClick={back} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU" className='h-10   w-10 ml-5 cursor-pointer rounded-full'  alt="" />

        <h1 className='text-3xl font-serif'>The Cart</h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVoSui3gOAhWucHNkFj_0h9SMgNFccA5L36H0CpISdqiI78wDEWb8GYejN22Ksgt5pJw&usqp=CAU" alt=""  className='h-10 w-10 mr-5 rounded-full' />
      </header>


      <div className='grid grid-cols-2 h-screen text-wrap'>


                  {books.map((f , index)=>(

                        <div key={index}  className='grid text-wrap grid-cols-2'>
                          <div className='border border-yellow-300 bg-yellow-100 ml-7 rounded-3xl w-[700px] m-10 h-60'>

                            <div className='flex justify-between'>

                                <div className='flex space-x-4 m-10'>
                                    <input className='m-3 cursor-pointer h-5 w-5' type="checkbox" />
                                    <img className='h-40 w-40' src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                                
                                <div className='m-10 space-y-5'>
                                  <p className='text-3xl font-bold'>Name : {f.name}</p>
                                  <p className='text-xl font-semibold'>Language : {f.language}</p>
                                  <p className='text-xl font-semibold'>Price : {f.price}</p>
                                </div>

                                <div>

                                </div>

                            </div>

                          </div>
                        </div>
                   ))}
      </div>

      <footer className='flex sticky bottom-0 '>
          
            <div className=' text-center border font-serif  border-l-0 border-t-0 border-b-black text-2xl  w-screen font-medium pb-3 bg-yellow-700  pt-3'>
                  <h3>GrandTotal&nbsp;&nbsp;: ${total}</h3>
            </div>

            <div onClick={payment} className=' text-center border  font-serif border-r-0  border-t-0  border-b-black text-2xl w-screen font-medium pb-3  pt-3 bg-yellow-700'>
                <h3>Continue</h3>
            </div>

      </footer>
      
      
    </div>
  );
}
