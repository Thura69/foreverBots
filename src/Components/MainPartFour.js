import React, { useState } from 'react'


const data = [
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FseventeenThirtyFourClub-true.png&w=1080&q=75",name:"1734-CLUB",points:"40 Points",hover:"Hold a bot between #1-#1734"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2Fsiblings-true.png&w=1080&q=75",name:"SIBLINGS",points:"50 Points",hover:"Hold 2x bots of same Class"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2Fcouple-true.png&w=1080&q=75",name:"COUPLE",points:"50 Points",hover:"Hold 2x Double Color Rarity"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2Ftwins-true.png&w=1080&q=75",name:"TWINS",points:"80 Points",hover:"Hold 2x  bots of same Class with Matching heads"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FscreenTime-true.png&w=1080&q=75",name:"SCREEN TIME",points:"100 Points",hover:"Hold 2x Single Epic with Epic Item"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FneedForSpeed-true.png&w=1080&q=75",name:"NEED FOR SPEED",points:"100 Points",hover:"Hold 2x Single Epic with Epic Wheels"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FepicLove-true.png&w=1080&q=75",name:"EPIC LOVE",points:"120 Points",hover:"Hold 3x any Epic Rarity"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2Fconfetti-true.png&w=1080&q=75",name:"CONFETTI",points:"140 Points",hover:"Hold 3x Multicolor Rarity"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FslingoBingo-true.png&w=1080&q=75",name:"SLINGO BINGO",points:"160 Points",hover:"Hold 3x Slingos"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FbananaSplit-true.png&w=1080&q=75",name:"BANANA SPLIT",points:"180 Points",hover:"Hold 3x Split Rarity"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FfakeMono-true.png&w=1080&q=75",name:"FAKE MONO",points:"200 Points",hover:"Hold 3x Single Epic with same color Parts"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FfullFam-true.png&w=1080&q=75",name:"FULL FAM",points:"250 Points",hover:"Hold a bot of each OG Class"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FsplitFam-true.png&w=1080&q=75",name:"SPLIT FAM",points:"300 Points",hover:"Hold 5 unique class of Split Rarity"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FtripleDouble-true.png&w=1080&q=75",name:"TRIPLE DOUBLE",points:"400 Points",hover:"Hold 1x Pink Slingo + 1 Pink Doval Rarity Monochrome"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FmonoFam-true.png&w=1080&q=75",name:"MONO FAM",points:"450 Points",hover:"Hold 10x bots"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FmegaWhale-true.png&w=1080&q=75",name:"MEGA WHALE",points:"550 Points",hover:"LOYAL FLUSH"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FmegaMono-true.png&w=1080&q=75",name:"MEGA MONO",points:"550 Points",hover:"Hold a Monochrome rarity bot of each class"},
{img:"https://foreverbots.io/_next/image?url=%2Fimg%2Fachievements%2FepicFam-true.png&w=1080&q=75",name:"EPIC FAM",points:"5000 Points",hover:"Hold 5 Triple Epic Rarity"}];





function MainPartFour() {
 
  

  return (
    <section className='partfour bg-[#222] text-[#cef934]  py-16 '>
   <div className='one-part flex flex-col lg:flex-row lg:justify-between px-6'>
   <div className='one-part-mini lg:w-[50%] w-full flex flex-col lg:justify-start'>
   <h1 className='lg:text-[100px] text-[60px] mb-6'>RANK</h1>
   <p className='text-[24px]   max-w-[500px] leading-[1.1]'>Collect different combination of bots and earn achievements. Hover the badges and see what bots to collect. Head in to the Terminal to show all your bots and achievements.
</p>
<button className='mt-10 bg-[#cef934]  text-[#222] px-14 py-2 rounded-full text-[30px]  lg:w-[550px] lg:py-2 lg:px-2  hover:bg-[#222] hover:text-[#cef934] border-2 border-[#cef934]  text-center lg:mx-0 '>FULL_HIGHSCORE</button>
   </div>
   <div className='two-part-mini lg:w-[50%] w-full py-6 border-t-4 border-b-4 border-[#cef934] mt-10'>
  <table className='gap-[10%] w-full  text-center'>
  <tr>
  <th>RANK:</th>
  <th>SCORE:</th>
  <th>ADDRESS:</th>
  </tr>
  <tr>
<td>01</td>
<td>15930</td>
<td>0xAA30....0973</td>
  </tr>
  <tr>
  <td>02</td>
  <td>10510</td>
  <td>0x47E7....6F83</td>
  </tr>
  <tr>
  <td>03</td>
  <td>10320	</td>
  <td>0x12f1...28dB</td>
  </tr>
  <tr>
  <td>04</td>
  <td>9270</td>
  <td>0x2A7C...b3db</td>
  </tr>
  <tr>
  <td>05</td>
  <td>8120</td>
  <td>0x17C5...1e75</td>

  </tr>
  <tr>
  <td>06</td>
  <td>7090</td>
  <td>0x5aA5...3238</td>

  </tr>
  <tr>
  <td>07</td>
  <td>7080</td>
  <td>0xF3bD...4590</td>

  </tr>
  <tr>
  <td>08</td>
  <td>7060</td>
  <td>0x785D...C027</td>

  </tr>
  <tr>
  <td>09</td>
  <td>6730</td>
  <td>0x74B4...9DC8</td>

  </tr>
  <tr>
  <td>10</td>
  <td>6510</td>
  <td>0xb0dc...aab7</td>

  </tr>
  </table>
   </div>
   </div>
   <div className=' two-part flex flex-wrap items-center justify-center text-center gap-[5%]  mt-10 '>
{
    data.map((e)=>{
        return(
        <div  className=' group   text-white max-w-[30%] md:max-w-[20%] relative hover:scale-110 ease-in duration-150   w-full select-none'>
        <img className='' src={e.img}></img>
        <p className='text-[14px] md:text-[20px]'>{e.name}</p>
        <p className='text-[12px] md:text-[14px]'>{e.points}</p>
        
     
      <div className="absolute group-hover:block hidden left-[10%] top-0  bg-black p-2 text-[12px]   rounded max-w-[200px]">{e.hover}</div>
      
        </div>
        )
    })
}
   </div>
    </section>
  )
}

export default MainPartFour