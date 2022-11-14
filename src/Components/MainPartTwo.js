import React from 'react'

function MainPartTwo() {
  return (
    <section className='part-two bg-black text-[#cef934] px-6 font-mono py-10  lg:flex items-center justify-between lg:py-2'>
    <div className='first-part flex flex-col gap-4 lg:items-start'>
    <h1 className='flex items-center text-[54px] lg:text-[120px]'>MINT <img src="https://foreverbots.io/_next/image?url=%2Fimg%2Fmint-stars.gif&w=128&q=75" className='w-[115px]'></img></h1>
    <p className='lg:text-[27px]'>There's something special about minting your own bot. A unique bot fresh from the vault.</p>
    <button className='mt-10 bg-[#cef934] text-black px-14 py-4 rounded-full text-[30px] mx-auto lg:w-[200px] lg:py-2 lg:px-0  hover:bg-black hover:text-[#cef934] border-2 border-[#cef934] text-center lg:mx-0'>MINT_NOW</button>
    </div>
    <div><img src="https://foreverbots.io/_next/image?url=%2Fimg%2Fmint-box-open.png&w=1920&q=75"></img></div>
    </section>
  )
}

export default MainPartTwo