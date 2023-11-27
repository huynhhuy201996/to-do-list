import { global } from "./styles/global";
import HomeScreen from "./screens/HomeScreen";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import AudioScreens from "./components/AudioScreens";
import { useState } from "react";
import UserContext from "./store/userContext";


const defaultVAlue = {

};

function App() {
  const [user, setUser] = useState(defaultVAlue);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App;
