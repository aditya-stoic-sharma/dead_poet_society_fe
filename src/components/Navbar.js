import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './Login';


export default function Navbar(props) {

  const navigate = useNavigate();

  const logged=()=>{
        navigate("/Login");
  }

  const carty = useNavigate();

  const deadu = useNavigate();
  const Dead=()=>{
    deadu("/Dead");
  }
  const Cart = ()=>
  {
     carty("/Cart");
  }
 
  return (
    
    <div style={{backgroundColor : props.mode==='dark'?'#C19A6B':'gray'}} className='sticky top-0 z-10'>
      
      {/* Upper-Navbar */}
        <div  style={{backgroundColor : props.mode==='dark'?'#B87333' : 'black'}} className={`Upper-Nav flex  justify-between w-screen  h-16 items-center `}>

          <div className='logo cursor-pointer ml-10 space-x-40 '>

                <img src="https://static.vecteezy.com/system/resources/previews/008/909/270/non_2x/dps-logo-dps-letter-dps-letter-logo-design-initials-dps-logo-linked-with-circle-and-uppercase-monogram-logo-dps-typography-for-technology-business-and-real-estate-brand-vector.jpg"  className='logo rounded-full border  border-white h-12 w-12'
                onClick={props.mody} /> 

                {/* <div onClick={Cart}><button>ujjwal</button></div> */}
                {/* <div onClick={Dead}><button>ujjwal</button></div> */}

                

          </div>


          < div className='w-40  flex space-x-5 mr-12 rightNav'>

                    <img onClick={Cart} src="https://t4.ftcdn.net/jpg/07/53/30/87/240_F_753308712_A0o7T6YvhL6TZnhY8GKX0PDalmcJa0PL.jpg" alt="" className='h-10 w-10  cursor-pointer rounded-full '/>
               
                  

               
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsRkfxtZ9zmuUWv_O3snAivrzDsg9EZ_sc0YfdAmJWSIrMd5rcdzySX8OfbBAB_WlgJk&usqp=CAU" alt=""  onClick={props.toggle} 
                  className=' h-10 w-10  cursor-pointer rounded-full '/>

                  <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="" onClick={logged}  className='h-10 w-10 cursor-pointer  rounded-full '/>
                
          </div>

        </div>

      {/* lower navbar */}
        <div className='flex justify-around cursor-pointer '>

          <div className=' text-center border  border-l-0 border-t-0 border-b-black text-3xl w-auto w-screen font-bold pb-3  pt-3 '>
              <Link to="/Shabdkosh"><h3>SHABDKOSH</h3></Link>
          </div>
          <div className=' text-center border border-r-0  border-t-0  border-b-black text-3xl w-auto w-screen font-bold pb-3  pt-3  '>
             <Link to="/Shabdarth"><h3>SHABDARTH</h3></Link>
          </div>

        </div>
    </div>
    
  );
}
