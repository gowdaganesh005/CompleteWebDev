import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Components/RevenueCard'
{/* <>
    <div className='flex justify-around'>

      <div className='bg-green-400'>hi there</div>
      <div className='bg-red-400'>hi there</div>
      <div className='bg-purple-400'>hi there</div>
      <div className='bg-blue-400'>hi there</div>
    </div>

    <br /><br />


    <div className='grid grid-cols-3'>

      <div className='bg-green-400'>hi there</div>
      <div className='bg-red-400'>hi there</div>
      <div className='bg-purple-400'>hi there</div>
      <div className='bg-blue-400'>hi there</div>
      
    </div>

    <br /><br />

    {/* max divisons is 12 */}

    // <div className='grid grid-cols-12'> 
    //   <div className='bg-green-400 col-span-6'>hi there</div>
    //   <div className='bg-red-400 col-span-2'>hi there</div>
    //   <div className='bg-purple-400 col-span-3' >hi there</div>
    //   <div className='bg-blue-400 col-span-1'>hi there</div>
      
    // </div>

    // <br /><br />

    // <div className='bg-blue-500 lg:bg-black'>hellooooo</div>
    // <br /><br />
    // <br /><br />

    {/* tailwind is a mobile first so if md:bg-black will comw in effect when screen is md or greater */}


  //   <div className='grid grid-cols-2 md:grid-cols-4'> 
  //     <div className='bg-green-400 '>hi there</div>
  //     <div className='bg-red-400'>hi there</div>
  //     <div className='bg-purple-400 '>hi there</div>
  //     <div className='bg-blue-400 '>hi there</div>
      
  //   </div>
  //   </>
  // ) */}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3'>


    <RevenueCard title="Amount Pending" amount={"98,234.40"} ordercount={13}/>
    
    
    </div>

  )
    
}

export default App
