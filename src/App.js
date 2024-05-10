import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './mycomponents/Main';
import About from './mycomponents/About';
import Profile from './mycomponents/Profile';
import Project from './mycomponents/Projects';
import Skill from './mycomponents/Skills';
import Feats from './mycomponents/Feats';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Skill' element={<Skill/>}/>
          <Route path='/Feats' element={<Feats/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
