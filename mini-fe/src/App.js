import {  
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';
import Weather from './components/Weather';
import NavBar from './components/Navbar';
import Cards from "./components/Cards";

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
        <Route path='/cards' element={<Cards/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
