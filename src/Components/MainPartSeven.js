import React from 'react'


const data = [
    {firstname:"OSCAR",secondname:"PEERSSON",place:"Founder & Creative",fame:"Animation wizard and loop creator. Dedicated to solving intricate problems and transforming complexity into simplicity. Considered as one of the pioneers in 3D loops with 95K followers on Instagram.,",instagram:"@0scarPettersson",web:"oscarpettersson.se",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Foscar.png&w=640&q=75"},

    {firstname:"KEVIN",secondname:"OLBERG",place:"Founder & Creative",fame:"Art Director and Designer with 13+ years of experience working with visual trickery and animation. Designer and builder of robot parts.",instagram:" @kevinolberg",web:"kevinolberg.com",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fkevin.png&w=640&q=75"},

    {firstname:"LARS",secondname:"ERICSSON",place:"Developer",fame:"Doing things with code. Experience working with creative technology and emerging technologies to accomplish atypical solutions to typical problems.",instagram:"",web:"atypical.tech",twitter:"@larsericsson",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Flars.png&w=640&q=75"},

    {firstname:"JAMES",secondname:"DELANEY",place:"Makes of Mischief",fame:"Creator of @RowdyFlippr. In charge of swap pool and discord events. Stealer of Robots.",instagram:"",web:"",twitter:"@jamus900",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fjamus900.png&w=640&q=75"},

    {firstname:"ADAM",secondname:"CHRIGSTRÖM ",place:"Strategy & Spreadsheets",fame:"Tech/media founder with experience building B2C companies in the entertainment space. Strategy nerd, product guy, spreadsheet master and avid Foreverbots collector.",instagram:"",web:"",twitter:"@majorspace",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fadam.png&w=640&q=75"},

    {firstname:"ROB",secondname:"WATSON",place:"Developer",fame:"Solidity developer providing software solutions and consultancy.",instagram:"",web:"",twitter:"@0xTDF",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Frob.png&w=640&q=75"},
]


function MainPartSeven() {
  return (
   <section className='part-seven bg-[#d5d4cf] text-[#0281ee]  py-16 px-6 flex flex-wrap justify-center  place-items-baseline gap-x-[5%]'>
   {
    data.map((e)=>{
      return (
    <div className='max-w-[400px] mb-10'>
     <img className='mx-auto' src={e.img}></img> 
    <div>
    <p className='text-[42px] mt-6'>{"<" + e.firstname}</p>
     <p className='text-[42px] mb-6'>{e.secondname + ">"}</p>

     <p className='text-[24px] my-6 leading-[1]'>{e.place}</p>
     <p className='text-[24px] my-6'>{e.fame}</p>

    {
      e.instagram? <p className='text-[24px]'>Instagram: <a className='hover:underline' href='#'>{e.instagram}</a></p> : ""
    }
     {
      e.twitter? <p className='text-[24px]'>Twitter: <a className='hover:underline' href='#'>{e.twitter}</a> </p> : ""
    }
     {
      e.web? <p className='text-[24px]'>Web : <a className='hover:underline' href='#'>{e.web}</a></p> : ""
    }
    </div>
    </div>
      )
    })
   }

   </section>
  )
}

export default MainPartSeven