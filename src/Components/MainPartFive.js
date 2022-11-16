import React from 'react'


const data = [{name:"FROGSTER",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Ffrogster.gif&w=1080&q=75",hover:"882 available"},{name:"DOVAL",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fdoval.gif&w=1080&q=75",hover:"865 available"},{name:"FLIPPER",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fflipper.gif&w=1080&q=75",hover:"862 available"},{name:"QBOT",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fqbot.gif&w=1080&q=75",hover:"869 available"},{name:"LEMON",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Flemon.gif&w=1080&q=75",hover:"871 available"},{name:"SLINGO",img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fslingo.gif&w=1080&q=75",hover:"651 available"}]


function MainPartFive() {
  return (
   <>
   <section className='part-five partfour bg-[#d9d9d9] text-[#fc7b01]  py-16 px-6'>
    <div className='one-part flex flex-col lg:flex-row lg:justify-between px-6'>
    <div className='one-part-mini'>
     <h1 className='lg:text-[100px] text-[60px] lg:mb-20 mb-6'>5K NFT</h1>   
     <p className='text-[25px] font-normal   max-w-[500px] leading-[1.1]'>Every companion is different. Thanks to a procedural workflow, every robot will get its own unique combination of parts, ensuring its uniqueness.</p>
    </div>
    <div className='two-part-mini lg:w-[50%] w-full py-6 border-t-4 border-b-4 border-[#fc7b01] mt-10'>
    <table className='w-full  gap-[5%] text-center my-10 text-[14px] lg:text-[20px]'>
    <tr>
    <th>RARITY:</th>
    <th>BASE POINTS:</th>
    <th>AVAILABLE:</th>
    </tr>
    <tr>
    <td>DOUBLE COLOR</td>
    <td>100</td>
    <td>2050</td>
    </tr>
    <tr>
    <td>SINGLE EPIC</td>
    <td>120</td>
    <td>1220</td>
    </tr>
    <tr>
    <td>MULTICOLOR</td>
    <td>140</td>
    <td>726</td>
    </tr>
    <tr>
    <td>SPLIT</td>
    <td>180</td>
    <td>476</td>
    </tr>
    <tr>
    <td>MONOCHROME</td>
    <td>200</td>
    <td>374</td>
    </tr>
    <tr>
    <td>DOUBLE EPIC</td>
    <td>300</td>
    <td>139</td>
    </tr>
    <tr>
    <td>SPECIAL</td>
    <td>500</td>
    <td>9</td>
    </tr>
    <tr>
    <td>TRIPLE EPIC	</td>
    <td>1000</td>
    <td>6</td>
    </tr>
    </table>
    </div>
  
    </div>
    <div className='two-part lg:mt-20 flex flex-wrap items-center justify-center'>
    {
      data.map((e)=>{
        return (
          <div className='text-center mt-6'>
          <img src={e.img} className="hover:scale-[1.1] w-full max-w-[450px] duration-500 mb-2"></img>
          <h1 className='text-[42px]'>{e.name}</h1>
          </div>
        )
      })
    }
    </div>
    </section>
    <section className='ongoing w-full  overflow-hidden bg-[#01c85e]  text-[50px] text-[#fc7b01]  flex items-center '>
   
   <div class="flex items-center  gap-x-20 animate-spin-slow">
  <span className='flex items-center'><img className='w-[50px] ' src="https://foreverbots.io/img/head.svg
"></img>  HEADS </span> 
   <span className='flex items-center'><img className='w-[50px]' src="https://foreverbots.io/img/wheel.svg"></img> WHEELS</span> 
   <span className='flex items-center'><img className='w-[50px]' src="	https://foreverbots.io/img/item.svg"></img> ITEMS</span> 


   <span className='flex items-center'><img className='w-[50px] ' src="https://foreverbots.io/img/head.svg
"></img>  HEADS </span> 
   <span className='flex items-center'><img className='w-[50px]' src="https://foreverbots.io/img/wheel.svg"></img> WHEELS</span> 
   <span className='flex items-center'><img className='w-[50px]' src="	https://foreverbots.io/img/item.svg"></img> ITEMS</span> 

   <span className='flex items-center'><img className='w-[50px] ' src="https://foreverbots.io/img/head.svg
"></img>  HEADS </span> 
   <span className='flex items-center'><img className='w-[50px]' src="https://foreverbots.io/img/wheel.svg"></img> WHEELS</span> 
   <span className='flex items-center'><img className='w-[50px]' src="	https://foreverbots.io/img/item.svg"></img> ITEMS</span> 
   
   </div>
    
    </section>
    </>
  )
}

export default MainPartFive