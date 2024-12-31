import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pos from './pages/Pos'
import Receipt from './pages/Receipt'
import NavBar from './components/NavBar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/point-of-service' element={<Pos />} />
        <Route path='/receipt' element={<Receipt />} />
      </Routes>
    </div>
  )
}

export default App
