import { useState } from 'react';
import './App.css';
import Index from './ComponentA/index';
import Users from './ComponentA/Users';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Flexbox from './ComponentA/Flexbox';
import User from './ComponentA/User';
import Routing from './ComponentA/Routing';
import NavBar from './ComponentA/NavBar';
import Signup from './ComponentA/Signup';
import Login from './ComponentA/Login';
function App() {
  const name = "Dhanush"
  const [showComponent, setShowComponent] = useState(false);
  return (
    <BrowserRouter>
      {/* <section>
        <Link to=''>Home</Link>
        <br />
        <Link to='/index'>Index</Link>
        <br />
        <Link to='/flex'>Flexbox</Link>
        <br />
        <Link to='/routing'>Routing</Link>
      </section> */}
      <NavBar />
      <Routes>
        <Route path='' element={<Users />} />
        <Route path='/index' element={<Index />} />
        <Route path='/flex' element={<Flexbox />} />
        <Route path='/routing' element={<Routing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {
          /* Nested Routing
          <Route path='/parent>
            <Route path='child1' element={<Child1 />} />
            <Route path = 'child2' ... />
          </Route>

          ex: http://localhost:3000/parent/child1 => route to Child1
          /*/
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
