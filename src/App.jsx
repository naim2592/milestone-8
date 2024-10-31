// import Daisynavbar from './Components/Daisynavbar'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Linechart from './Components/Linechart/Linechart'
import Phones from './Components/phone/Phones'
import Priceoptions from './Components/PriceOptions/Priceoptions'
function App() {


  return (
    <>
    {/* <Daisynavbar></Daisynavbar> */}
      <Navbar></Navbar>
     <h1 className='text-4xl text-pink-500 bg-purple-500'>Lwets Start a new Mission</h1>
      <Priceoptions></Priceoptions>
      <Linechart></Linechart>
      <Phones></Phones>
    </>
  )
}

export default App
