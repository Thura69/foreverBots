import React from 'react'

function MainPartOne() {
  return (
    <section className='part-1  py-20 px-6 relative'>
    <h1 className='mb-20'>
    <img src='https://foreverbots.io/img/logo-yellow.svg' className='hidden md:block'></img>
    <img src='https://foreverbots.io/img/logo-vertical-yellow.svg' className='block md:hidden'></img>
    </h1>
    <h2 className='text-[56px]  lg:text-[135px] text-yellow-400 font-mono   leading-10 '>COLLECT, <br/> TRADE AND <br/> BUILD COMBOS</h2>
    <p className='text-[30px] lg:text-[37px] text-yellow-400 py-4 leading-none lg:leading-tight'>Get your own unique bot, start <br/> collecting combos and earn achievments.</p>

    <p className='text-[30px] lg:text-[37px] text-yellow-400 pb-20 pt-4 leading-none lg:leading-tight'>A digital art project by <a href="#" className='underline'>Oscar</a> <br/><a href='#' className='underline'>Pettersson</a> and <a href='#' className='underline'>Kevin Olberg</a>.
</p>
<img src="https://foreverbots.io/img/big-lemon-top.png" className='absolute right-0 bottom-0 max-w-full w-[55%]'></img>
    </section>
  )
}

export default MainPartOne