import {  
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';
import Weather from './components/Weather';
import NavBar from './components/Navbar';
import Cards from "./components/Games";
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<NavBar />}> 
        </Route>
        <Route path='/todolist' element={<HomePage/>}></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/games' element={<Cards />}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
