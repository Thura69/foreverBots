import React from 'react'

function MainPartThree() {
  return (
    <section className='part-three lg:flex'>
    <div className='first-part bg-[#0281ee] px-6 py-10 lg:w-1/2'>
    <img src='https://foreverbots.io/img/collect.png'></img>
    <div className='text-part text-[56px]  lg:text-[100px] text-yellow-400 font-mono   leading-10'>
    <h1 className='tracking-[1px] my-8'>CHECK <br/> YOUR <br/> SCORE!</h1>  
    <p className='text-[24px] leading-tight'>Enter the Terminal below to unlock your achievements, download PFP and view your collector score.</p>
    <button className='mt-10 bg-yellow-400  text-[#0281ee] px-14 py-4 rounded-full text-[20px] mx-auto lg:w-[300px] lg:py-4 lg:px-2  hover:bg-[#0281ee] hover:text-yellow-400 border-2 border-yellow-400  text-center lg:mx-0'>ENTER_TERMINAL</button>
    </div>
    </div>
  
    <div className='second-part bg-[#d5d4cf] px-6 py-10 lg:w-1/2'>
    <img src='https://foreverbots.io/img/trade.png'></img>
    <div className='text-part text-part text-[56px]  lg:text-[100px] text-[#fc7b01] font-mono   leading-10'>
    <h1 className='tracking-[1px] my-8'>TRADE OR <br/> SWAP?</h1>
    <p className='text-[24px] leading-tight'>There are many bots out in the wild. Snipe the bot you need to complete your combo and unlock achievements or swap one out in the Hangar.</p>
    <div className='lg:flex flex-col'>
    <button className='mt-10 bg-[#fc7b01]  text-white px-14 py-4 rounded-full text-[20px] mx-auto lg:w-[300px] lg:py-4 lg:px-2  hover:bg-[#d5d4cf] hover:text-[#fc7b01] border-2 border-[#fc7b01]  text-center lg:mx-0'>ENTER_HANGAR</button>
    <button className='mt-10 bg-[#fc7b01]   text-white px-14 py-4 rounded-full text-[20px] mx-auto lg:w-[300px] lg:py-4 lg:px-2  hover:bg-[#d5d4cf] hover:text-[#fc7b01] border-2 border-[#fc7b01] text-center lg:mx-0'>GO_FOR_A_HUNT</button>
    </div>
    </div>
    </div>

    </section>
  )
}

export default MainPartThree