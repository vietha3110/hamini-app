import './App.css';
import {  
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';
import Weather from './components/Weather';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/todolist' element={<HomePage/>}></Route>
        <Route path='/weather' element={<Weather/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
