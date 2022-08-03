import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import Login from "../../components/login/login";
import Profile from "../profile/profile";
import Listing from "../../components/createListing/listing";

import "./App.css";

function App() {


  const [user, setUser] = useState();
  const profilePic = faker.image.avatar();


  return (
  <div>
    {/* {!user && <Navigate to="/" />}  */}
    <Routes>
        <Route path="/" element={<Login user={user} setter={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setter={setUser} profilePic={profilePic} />} />
        <Route path="/listing" element={<Listing user={user} setter={setUser} profilePic={profilePic} />}/>
    </Routes>


  </div>
  );
}

export default App;
