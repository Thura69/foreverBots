import React from 'react';
import './index.css'
import Header from './Components/Header';
import MainPartOne from './Components/MainPartOne';
import MainPartTwo from './Components/MainPartTwo';
import MainPartThree from './Components/MainPartThree';
function App() {
  return (
  <>
  <Header/>
 <main className='  bg-[#ae78d2] '>
 <MainPartOne/>
 <MainPartTwo/>
 <MainPartThree/>
 </main>
  </>
  )
}

export default App