import './App.css';

import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Homepage from './pages/HomePage/Homepage';
import Cards  from './pages/Cards/Cards';
import { NotFound } from './pages/NotFound/NotFound';
import { Details } from './pages/Details/Details';
import { Make } from './pages/Make/Make';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='food' element={<Homepage/>}>
        <Route index element = {<Cards/>}/>
        <Route path='detail/:id' element={<Details/>}/>
        <Route path='make' element={<Make/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
  );
}

export default App;
