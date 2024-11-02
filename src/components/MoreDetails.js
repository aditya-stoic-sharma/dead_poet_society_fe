import React from 'react';
import { SiBackbonedotjs } from 'react-icons/si';
import { useNavigate  } from 'react-router-dom';
import { useState , useEffect } from 'react';
// import Books from './Books';
import { useLocation } from 'react-router-dom';



const Books = [
  {
     r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
  } , 


  {
    r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
 } , 

 {
  r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
} , 

{
  r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
} , 

{
  r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
} , 

{
  r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
} , 

{
  r :` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum est minus in laboriosam, veritatis inventore unde rem at beatae.`
}
]



export default function MoreDetails() {

  const location = useLocation();
 
  const book = location.state.d ; 



  const [update, setupdate] = useState([]);
  
  useEffect(() => {
    setupdate([...update , book]);
  }, []);

  

  const cart = useNavigate();
  const [cartBooks, setCartBooks] = useState([]);

 
  const addToCart = (book) => {
    
    // setCartBooks((prevCartBooks) => [...prevCartBooks, book]);

    cart('/cart');
  };


 const navigate = useNavigate();


  const back = useNavigate();

  const backy = ()=>{
    back('/Shabdkosh');
  }

  const [ review , setreview] = useState(false);
  const[ button , setbutton] = useState(true);
  const [texty , settexty] = useState('');
  const [ddata , setddata] = useState(Books);
  const[ thank , setthank] = useState(false);


  // cross pe click ho
  const showreview = ()=>{
    setreview(!review);
    setbutton(!button);
    settexty('');
  }


  // add review pe trigger hone vaala function
  const addreview = (texty) => {
    const newData = [...ddata];
    newData.push({ r:texty});
    setddata(newData);
    // console.log(ddata);
    settexty('');
    setbutton(false);
    setreview(false);
    setthank(true);
    setTimeout(()=>setthank(false),1000);
  };

  
  
  return (

    <div>


      <header className='text-center sticky top-0  flex items-center justify-between h-14 m-auto bg-yellow-700 border border-black'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU" 
              onClick={backy} className='h-10   w-10 ml-5 cursor-pointer rounded-full'  alt="" />

              <h1 className='text-3xl font-serif'>Book Details</h1>

              <div></div>

             
      </header>

   

      {thank && 

        <div className='text-center w-full  z-50 sticky top-14 rounded-3xl h-10 bg-yellow-200 border border-yellow-700'>
        <p>Thank you for your Review</p>
        </div>

        }


        <div className=' m-10 p-10  border  flex  flex-col items-center bg-amber-100  border-yellow-300 rounded-2xl h-full '>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEuIIR7bDOLXwAEoJZB1icsMXif84PFeYk4cKZjERThvgOJl6SZym8VJwzxg7f__aThg&usqp=CAU" className='w-3/4 h-3/4  mt-10 rounded-3xl' alt="" />


        <h1 className='font-extrabold text-7xl font-serif mt-10'>{book.name}</h1>

        <h1 className='font-bold text-5xl font-mono mt-10'>Price : {book.price}</h1>

        <h1 className='font-bold text-5xl font-mono mt-10'>Language : {book.language}</h1>

        <div className='m-20'>
           <h1  className='font-bold  mb-16 text-3xl font-mono mt-10'>Description : </h1>

          <p className=' text-xl font-semibold '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sed omnis blanditiis neque quaerat. Non molestiae harum labore officiis consectetur, laboriosam eum ipsa sed qui ex! Et quos rerum eligendi sunt magni nihil, saepe repudiandae quibusdam. Sed odit, quidem ipsam rem fuga aut velit quam fugiat, atque quod molestias ducimus, pariatur sint corrupti dolorum at nemo! Magni itaque numquam deserunt id, nam excepturi, dignissimos veritatis debitis porro voluptatem deleniti. Excepturi eius dolore obcaecati amet temporibus, vero rerum commodi, perferendis voluptas debitis corporis voluptatum blanditiis, magnam quidem! Odio expedita, obcaecati, veritatis qui distinctio quis incidunt dolores quisquam fugiat officiis consequuntur a recusandae minima quasi sunt laboriosam similique! Eum consequatur minus doloribus ullam aliquid nesciunt rem odio, nostrum voluptatem maiores iure optio totam sit molestiae, est cumque eaque laudantium autem esse dicta debitis. Ab modi vitae assumenda cupiditate, natus tenetur tempora odio voluptate ullam in blanditiis voluptates! Iusto officia modi quis deserunt! Suscipit enim possimus laudantium aspernatur error esse iste incidunt nihil. Hic, minima officia blanditiis quos deserunt praesentium repudiandae eveniet voluptate consequatur, nemo molestiae officiis unde, neque animi velit sunt reiciendis excepturi? Repudiandae necessitatibus error nobis vel, mollitia, asperiores facere, quisquam atque voluptates tenetur a corporis molestias cumque qui. Debitis, recusandae?</p>
        </div>


        <div>
          <h1  className='font-bold  mb-9 text-3xl font-mono mt-10' >Reviews : </h1>
          <ul className=' space-y-10 list-disc'>

            {ddata.map((dp)=>(

                  <li>
                  <h4 className='text-xl font-bold'>User Name </h4>
                  <p>{dp.r}</p>
                  </li>
             ))}             

            
          </ul>
        </div>

        <div>
         

         {button && 
             <div>
             <button onClick={showreview} className='h-14 w-52 bg-yellow-700 rounded-3xl font-medium text-lg  m-10 '> Want to Add Yours ?</button>
             </div>
         }

        
         {review && 
          <div className='flex flex-col  mt-20  space-y-5'>
            <div className='flex justify-between'>
              <div></div>
              <button onClick={showreview} className='mr-5 text-yellow-900 text-2xl'><i class="fa fa-close"></i></button>
            </div>
          <textarea  value={texty} onChange={(e) => settexty(e.target.value)}className='text-center ' placeholder='Add Your Review Here' name="" id="" cols="160" rows="10"></textarea>
          <button onClick={()=>addreview(texty)}   className=' bg-yellow-700 w-20 h-10 rounded-full m-auto'>Submit</button>
        </div>
         }

        </div>

        </div>

      

        

        <footer className=' flex sticky bottom-0 '>
        <div className=' text-center border font-serif  border-l-0 border-t-0 border-b-black text-2xl w-auto w-screen font-medium pb-3 bg-yellow-700  pt-3 '>
               <h3>Buy Now !</h3>
          </div>
          <div  onClick={()=>addToCart(book)} className=' text-center border  font-serif border-r-0  border-t-0  border-b-black text-2xl w-auto w-screen font-medium pb-3  pt-3 bg-yellow-700 '>
             <h3>Add To Cart</h3>
          </div>
        </footer>
    </div>
   
  );
}
