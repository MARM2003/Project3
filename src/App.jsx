import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Routes, Route } from "react-router-dom";
import Home from './UserSide/Pages/Home.jsx'
import SignInUp from "./UserSide/Pages/SignInUP.jsx";
import UserProfile from "./UserSide/Pages/UserV.jsx"
import Auth from "./UserSide/Components/Auth/Auth.jsx"
function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignInUp/>} />
        <Route path='/userLogin' element={  <Auth> <UserProfile/></Auth>}></Route>
      </Routes>
    
     
   
     
    </>
  )
}

export default App
