import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Structure from './Structure';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Structure><Landing /></Structure>} />
          <Route path="/pricing" element={<Structure><Pricing /></Structure>} />
          <Route path="/about-us" element={<Structure><AboutUs /></Structure>} />
          <Route path="*" element={<Structure><h1 className='absolute top-0 my-8 md:my-12 mx-auto text-xl md:text-2xl lg:text-3xl font-bold left-[50%] transform -translate-x-1/2'>
            <span className='text-primary'>404</span> Not Found</h1></Structure>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
