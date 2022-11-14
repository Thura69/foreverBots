import React from 'react'

function Header() {
  return (
    <header className='lg:sticky top-0 left-0 right-0 flex item-center justify-between  text-lg lg:text-xl text-yellow-400 p-5 bg-[#ae78d2] font-mono tracking-normal lg:tracking-wider select-none z-10'>
   <div> <a className='hover:underline underline-offset-1' href='#'>FOREVERBOTS&trade; </a></div>
   <ul className='lg:flex gap-x-10 hidden'>
   <li className='hover:underline underline-offset-1'><a href='#'>OPENSEA</a></li>
   <li className='hover:underline underline-offset-1'><a href='#'>FOUNDATION</a></li>
   <li className='hover:underline underline-offset-1'><a href='#'>TWITTER</a></li>

   </ul>

    </header>
  )
}

export default Header