
import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;
