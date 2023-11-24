import { global } from "./styles/global";
import HomeScreen from "./screens/HomeScreen";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import AudioScreens from "./components/AudioScreens";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/Login' element={<LoginScreen />} />
          <Route path='/AudioScreens' element={<AudioScreens />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
