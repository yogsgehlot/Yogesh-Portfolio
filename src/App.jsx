import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center h-screen bg-[#fdfffc] ">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App
