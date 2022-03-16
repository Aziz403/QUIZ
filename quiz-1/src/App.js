import {useEffect, useState} from 'react'
import Horizontal from './Horizontal'
import Vertical from './Vertical'



function App() {
  const nbrVisItems = 6
  const [itemIndex,setItemIndex] = useState(nbrVisItems)


  return (
    <main className='flex bg-slate-800 text-slate-200 h-screen overflow-hidden'>
      <Horizontal nbrVisItems={nbrVisItems} selected={itemIndex} setSelected={setItemIndex}/>
      <Vertical selected={itemIndex}/>
    </main>
  );
}

export default App;
