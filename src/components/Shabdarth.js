import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const data = [
  {
     p : `Mera ek sher Teri hr baat se bhtr hoga..

          Mera hr din Teri hr raat se behtar hoga...
          
          Tum dekhna apni in bewafa nazro se ...
          
          Mera janaza bhi teri baarat se behtar hoga...` ,

     likes : 67 
  },

  {
    p : `Yha takiye bheeg rhe hai khaare paani se..
          Jb se ek kirdaar alg hua h kahaani h..
          
          Mai yha kisi ladki ki taraf nazar utha kr nhi dekhta .
          Aur waah vo apna lehanga Mila rhi h kisi ki sherwani se` , 

    likes : 56
 },

 {
  p : `Vo mile to ye poochna hai mujhe ab bhi hu tere amaan me kya..

      Yu jo taakta hai aasman ko tu ..koi rhta hai aasman me kya..
      
      Aur ye mujhe chain kyu nhi aata..ek hi shaksh tha jahaan me kya..` , 

  likes :78
},

{
  p : `Bharam rkha h tere hizra ka vrna kya hota h...

        Mai rone pe aa jau to jharna kya hota h...
        
        Maut to meri muthi me h teri khaatir...
        
        Isse bhi aage ja skta hu mrna kya hota hai` , 

  likes : 67
},

{
  p : `Tum hakikat nhi  ..hasrat ho..

        Jo mile khwaab me vo daulat ho..
        
        kis tarah chod du tumhe jaana..tum meri zindagi ki aadat ho..
        
        daastaan khtm hone vaali hai...tum meri aakhri mohabbat ho...` , 

  likes :90
},

{
  p : `Kaise usne ye sb kuch merse chipkr badla...

      Chehra badla ...raasta badla....bd me ghr badla..
      
      Mai jiske baare me kehta tha logon se naam badal dena mera...agr vo shaksh badla`, 
  likes:98
},

{
  p: `Mere 2-4 khwaab hai jinhe mai aasma se dur chahta hu....
  Zindagi chahe gum naam rhe..pr maut mai mashoor chahta hu` , 

  likes : 65
} ,  

{

  p : `yaaro kuch to zikr kro uski kayaamat baaho ka .....
  vo jo simatata hoga unme vo to mr jaata hoga` ,

  likes : 45 
} , 

{
   p: `tum jb aaogi to khoya hua paogi mujhe...
   meri tanhaai me khwaabon ke siwa kuch nhi.....
   mere kamre ko sajaane ki tamanna hai tumhe...
   mere kamre me kitaabon ke siwa kuch nhi...` , 

   likes : 23 
}
];

export default function Shabdarth() {

  const backy=useNavigate();
const back=()=>{
   backy("/Homepage")
  
}

const kosh =useNavigate();

const mkosh = ()=>{
  kosh('/Shabdkosh');
}




const[islike , setislike] = useState("false");

// const [showOverlay, setShowOverlay] = useState(false);

// const [showLastDiv, setShowLastDiv] = useState(false);


const [dataWithLikes, setDataWithLikes] = useState(data);

const likey = (index) => {
  const newData = [...dataWithLikes];

  if(islike===true)
  {
    newData[index].likes -= 1; // Increase likes by 1
    // icon.class.add('fa fa-thumbs-o-up');

  }

  else if(islike===false)
  {
      newData[index].likes += 1;
      // icon.class.add('fa fa-thumbs-up');
  }

  
  setDataWithLikes(newData);
  setislike(!islike);
};

const copy=(text)=>
{
    
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
}

const [showPopup, setShowPopup] = useState(false);



const popup=()=>{
  
    // console.log(showPopup);
    
    setShowPopup(!showPopup);
    // console.log(showPopup);

    if(showPopup===true)
    document.body.style.overflow = "";
    
    else if(showPopup===false)
    document.body.style.overflow = "hidden";
}

const [poetryText, setPoetryText] = useState('');

const addPoetry = (text) => {
  
  const newData = [...dataWithLikes];
  newData.push({ p:text, likes: 0 });
  setDataWithLikes(newData);
  setPoetryText(''); // Reset textarea value after adding poetry
  popup(); // Close the popup after adding poetry
};


  return (
    
    <div className='main'>


      <header className='text-center sticky top-0  flex items-center justify-between h-14 m-auto bg-yellow-700 border border-black'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HVasfT-jTGxQ3HbknNgD4-COSX8EPCmrT68kFnGQyK-grSFMUj2AvXcJrPo37jEJqkM&usqp=CAU" className='h-10   w-10 ml-5 cursor-pointer rounded-full' onClick={back} alt="" />

        <h1 className='text-3xl font-serif'>Shabdarth</h1>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVoSui3gOAhWucHNkFj_0h9SMgNFccA5L36H0CpISdqiI78wDEWb8GYejN22Ksgt5pJw&usqp=CAU" alt="" onClick={mkosh} className='h-10 w-10 mr-5 rounded-full' />
      </header>

      

    < div className='overflow-y-auto boxes  items-center flex flex-col justify-center '>
       
       {dataWithLikes.map((d , index )=>(

            <div  key={index} className='  w-3/4 h-[300px] border overflow-y-auto rounded-xl m-10 border-black'>
            <div className='bg-yellow-50  h-4/5'>
              <p className='text-black font-mono p-20 '>{d.p}</p>
            </div>
            <div className='bg-yellow-600  flex justify-evenly items-center h-1/5'>

                  <div className='w-1/2 text-center cursor-pointer font-bold text-2xl ' onClick={()=>likey(index)}><i   
                 className={`like-icon fa ${ islike[index] ? 'fa-thumbs-up' : 'fa-thumbs-o-up'} mr-3`} ></i>{d.likes}</div>

                  <div className='h-full w-0.5 bg-black'></div>

                  <div className='cursor-pointer w-1/2 text-center text-black font-bold text-2xl'  onClick={()=>copy(d.p)}><i class="fa fa-edit"></i></div>
            </div>
            </div>
       ))}

    </div>




      <footer className=' irshaad sticky bottom-0 cursor-pointer'>
      <div style={{backgroundColor : "#C19A6B"}} onClick={popup}  className='text-center flex items-center justify-center h-14 m-auto  border border-black'>
        <h1 className='text-3xl font-serif'>Zehmat-E-Kalaam </h1>
      </div>
      </footer>
    
      {/*POP UP PAGE   */}

   {showPopup  && <div className=' h-full w-screen  backdrop-blur-md fixed  border-b-slate-600 z-10 top-0'>

        <div className=' bg-yellow-50 rounded-lg shadow-slate-500 shadow-lg top-1/4 left-[300px]  w-3/5 h-96 z-20 relative  overflow-y-auto'>

          <div className=' flex justify-between'>
             <div></div>
             <div onClick={popup} ><img src="https://png.pngtree.com/png-clipart/20220603/original/pngtree-flat-x-cross-mark-button-in-red-color-and-white-line-png-image_7900019.png" alt="" className='h-12 w-12 m-5 cursor-pointer  ' /></div>
           </div>

          <div className='text-center '>
            <textarea value={poetryText} onChange={(e) => setPoetryText(e.target.value)}  className=" outline outline-yellow-950 text-center cursor-text m-3"name="poetry" type="text" cols="100" placeholder='Farmaayein.......' rows="5"></textarea>
          </div>

          <div className='text-center m-10'>
            <button onClick={()=>addPoetry(poetryText)} className='h-14 w-24 text-xl font-serif font-bold rounded-2xl text-black bg-yellow-700'>Irshaad</button>
          </div>

        </div>

 
    </div> }

    </div>



  );
}

