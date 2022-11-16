import React from 'react';
import './index.css'
import Header from './Components/Header';
import MainPartOne from './Components/MainPartOne';
import MainPartTwo from './Components/MainPartTwo';
import MainPartThree from './Components/MainPartThree';
import Ongoing from './Components/Ongoing';
import MainPartFour from './Components/MainPartFour';
import PartFourOngoing from './Components/PartFourOngoing';
import MainPartFive from './Components/MainPartFive';

function App() {
  return (
  <>
  <Header/>
 <main className='  bg-[#ae78d2] '>
 <MainPartOne/>
 <MainPartTwo/>
 <MainPartThree/>
 <Ongoing/>
 <MainPartFour/>
 <PartFourOngoing/>
 <MainPartFive/>
 </main>
  </>
  )
}

export default App