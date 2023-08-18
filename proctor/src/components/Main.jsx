import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'


const Main = () => {
  
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/services"
        element={<Services />}
      />
      <Route
        path="/contactUs"
        element={<ContactUs />}
      />
      
      
    </Routes>
  )
}

export default Main