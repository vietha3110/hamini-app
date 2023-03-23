import './App.css';
import {  
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Navigation/><HomePage/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
