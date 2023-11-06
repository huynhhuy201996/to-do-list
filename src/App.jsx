import { global } from "./styles/global";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
    <div className="containt-fuild p6" style={global.container}>
      <div className="container">
        <HomeScreen />
      </div>
    </div>

  )

}

export default App;
