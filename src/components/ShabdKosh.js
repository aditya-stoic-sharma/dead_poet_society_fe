import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  },
  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russdfghjn`
  },
  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 
  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  } , 

  {
    name: `THE WHISPER`,
    image: ``,
    price: `100`,
    language: `russian`
  }
];

export default function ShabdKosh() {
  const backy = useNavigate();

  const back = () => {
    backy('/Homepage');
  };


  const [selectedBook, setSelectedBook] = useState(null);
  const details = useNavigate();

  const godetails=(d)=>{
    setSelectedBook(d);
    details('/Moredetails' , { state: { d } });
  }

  const arth =useNavigate();

  const marth=()=>{
    arth('/Shabdarth');
  }

  const [showadd , setshowadd] = useState(false);

  const enablepop=()=>{
    setshowadd(!showadd);

    
    if(showadd===true)
    document.body.style.overflow = "";
    
    else if(showadd===false)
    document.body.style.overflow = "hidden";
  }

  return (
    <div>

      <header className='text-center sticky top-0 flex items-center justify-between h-14 m-auto bg-yellow-700 border z-10 border-black'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU'
              className='h-10 w-10 ml-5 cursor-pointer rounded-full'
              onClick={back}
              alt=''
            />
            <h1 className='text-3xl font-serif'>ShabdKosh</h1>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVoSui3gOAhWucHNkFj_0h9SMgNFccA5L36H0CpISdqiI78wDEWb8GYejN22Ksgt5pJw&usqp=CAU'
              alt='' onClick={marth}
              className='h-10 w-10 mr-5 rounded-full'
            />
      </header>


      {/* beech ka system */}
        <div className='h-screen gap-10 overflow-y-auto grid text-center my-10 grid-cols-4 '>
          {books.map((d) => (
            <div className=' border ml-10 bg-yellow-50 transition-transform hover:shadow-2xl  hover:scale-125 duration-300 hover:bg-yellow-100 hover: cursor-pointer border-yellow-300 rounded-2xl h-80 w-56 ml-10 mt-10'>
              <div className=' flex justify-center items-center m-2 '>
                <img
                  src='https://t3.ftcdn.net/jpg/04/94/30/54/360_F_494305459_dS9YOAGWKE8yqCkr7H0fxzfbQoDmG9OV.jpg'
                  className=' h-32 w-40  rounded-3xl'
                  alt=''
                />
              </div>
              <hr className='font-bold' />
              <div className=' flex flex-col justify-center gap-2 items-center'>
                <h3 className='font-bold text-2xl'>{d.name}</h3>
                <p className='font-serif font-semibold'>Language: {d.language}</p>
                <p className='font-serif font-semibold'>Price: ${d.price}</p>
              </div>
              <div className='flex justify-center my-5 '>
                <button onClick={()=>godetails(d)} className=' transition-transform ease-in-out hover:scale-90 duration-300  h-10 w-32 bg-yellow-700  rounded-2xl hover:cursor-pointer '>
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>




        <footer onClick={enablepop} className=' irshaad sticky bottom-0 cursor-pointer'>
          <div style={{ backgroundColor: '#C19A6B' }} className='text-center flex items-center justify-center h-14 m-auto  border border-black'>
            <h1 className='text-3xl font-serif'>Raqs-E-Lafz</h1>
          </div>
        </footer>


            {/*pop up vaala scene  */}
   {showadd  && <div className=' h-screen w-screen  backdrop-blur-md absolute border-b-slate-600 z-10 top-0'>

            <div className=' bg-yellow-50 rounded-lg shadow-slate-500 shadow-lg top-1/4 left-[300px]  w-3/5 h-96 z-20 absolute  overflow-y-auto'>

              <div className=' flex justify-between'>
                <div></div>
                <div  ><img src="https://png.pngtree.com/png-clipart/20220603/original/pngtree-flat-x-cross-mark-button-in-red-color-and-white-line-png-image_7900019.png" alt="" onClick={enablepop} className='h-12 w-12 m-5 cursor-pointer  ' /></div>
              </div>

              <div className='text-center gap-5'>
                  <div>
                    <label> Name of The Book :</label>
                    <input type="text" />
                  </div>

                  <div>
                    <label> Image The Book :</label>
                    <input type="file" />
                  </div>

                  <div>
                    <label> Price of The Book :</label>
                    <input type="text" />
                  </div>

                  <div>
                    <label> Language of The Book :</label>
                    <input type="text" />
                  </div>

                  <div>
                    <label> Description of The Book :</label>
                    <input type="text" />
                  </div>
              </div>

              <div className='text-center m-10'>
                <button  className='h-14 w-24 text-xl font-serif font-bold rounded-2xl text-black bg-yellow-700'>Add Book</button>
              </div>

            </div>


       </div> }



    </div>
  );
}
