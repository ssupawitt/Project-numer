import { NavBar } from './NavBar';
import Home from './Element/Home';
import Bisection from './RootOfEquation/Bisection';
import FalsePosition from './RootOfEquation/FalsePosition';
import Newtonraphson from './RootOfEquation/Newtonraphson';
import OnepointIteration from './RootOfEquation/OnepointIteration';
import Secantmethod from './RootOfEquation/Secantmethod';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/FalsePosition" element={<FalsePosition/>} />
        <Route path="/Newtonraphson" element={<Newtonraphson/>} />
        <Route path="/OnepointIteration" element={<OnepointIteration/>} />
        <Route path="/Secantmethod" element={<Secantmethod/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
