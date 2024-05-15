import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Explore from './Explore';
import List from './List';
import Userform from './user_form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/userform' element={<Userform/>}/>
      </Routes>
    </Router>
  );
}

export default App;
