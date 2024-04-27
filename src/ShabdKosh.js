import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShabdKosh() {

  const backy=useNavigate();
  const back=()=>{
      backy('/Homepage')
  }

  return (

   

    <div>
      
      <header className='text-center sticky top-0  flex items-center justify-between h-14 m-auto bg-yellow-700 border border-black'>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU" className='h-10   w-10 ml-5 cursor-pointer rounded-full' onClick={back} alt="" />

        <h1 className='text-3xl font-serif'>ShabdKosh</h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVoSui3gOAhWucHNkFj_0h9SMgNFccA5L36H0CpISdqiI78wDEWb8GYejN22Ksgt5pJw&usqp=CAU" alt="" className='h-10 w-10 mr-5 rounded-full' />
      </header>
      <div className='h-screen'></div>

      <footer className=' irshaad sticky bottom-0 cursor-pointer'>
      <div style={{backgroundColor : "#C19A6B"}}   className='text-center flex items-center justify-center h-14 m-auto  border border-black'>
        <h1 className='text-3xl font-serif'>Raqs-E-Lafz</h1>
      </div>
      </footer>

    </div>
  );
}
