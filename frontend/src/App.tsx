import { Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/rooms" element={<h1>Rooms</h1>} />
        <Route path="/bookings" element={<h1>Bookings</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/checkin" element={<h1>Checkin</h1>} />
     </Routes>
    </>
  )
}

export default App