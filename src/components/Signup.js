import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const homy = useNavigate();

  const homepe = ()=>{
    homy('/homepage');
  }

  return (
    <div className=' flex justify-center items-center h-screen'>
      <div className='flex justify-center items-center w-3/4 h-screen '>

        <div className=' space-y-10 leftbox w-2/3 flex flex-col justify-center items-center rounded-3xl bg-yellow-50 h-3/4 '>

          <div><h4 className='text-3xl font-bold'>Welcome</h4></div>

          <div className='space-y-5'>
            <div className='flex flex-col items-center space-y-3'>
              <label>Name</label>
              <input type="text" className='text-center' placeholder='Name'/>
            </div>


            <div className=' flex flex-col items-center  space-y-3'>
              <label >E-mail Id</label>
              <input type="text" placeholder='E-mail Id' className='text-center' />
            </div>


            <div className='flex flex-col items-center space-y-3'>
              <label>Password</label>
              <input type="password" className='text-center' placeholder='Password' />
            </div>

            {/* <div className='flex flex-col items-center space-y-3'> 
              <label>username </label>
              <input type="text" className='text-center' placeholder='username'/>
          </div> */}

            {/* <div className='flex flex-col item-center space-y-3'>
              <label>ujjwal</label>
              <input type="text" className='text-center' placeholder='ujjwaln' />
            </div> */}
            
          </div>

          <div className='flex justify-center'>
            <Link to="/Login"><button className='border border-black bg-yellow-300 px-3 p-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-125'>Sign-Up</button></Link>
          </div>

        </div>

        <div className='rightbox bg-yellow-300 w-1/3 flex rounded-3xl justify-center items-center h-3/4 flex-col space-y-10'>

          <div><h3 className='text-2xl font-bold'>Want To Connect With Us!</h3></div>

          <div className='flex justify-center'>
            <p className='text-wrap w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta quaerat accusamus, quo aperiam commodi molestiae ipsa laborum dignissimos doloribus tempore delectus incidunt nisi perferendis at? Sit molestiae odit accusamus?</p>
          </div>

          <Link to="/Login"><div><button className='border border-black bg-yellow-100 px-3 p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-125'>Sign In !</button></div></Link>
          

         


          {/* <div  onClick={homepe} className='h-10 w-40 flex justify-center items-center rounded-full hover:cursor-pointer bg-yellow-400'>
            <button>CHECK IT HERE </button>
          </div> */}
       

        </div>

      </div>
    </div>
  );
}
