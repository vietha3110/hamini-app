import './App.css';
import {  
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
