import Main from './components/pages/main/Main';
import Navbar from './components/common/navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import './styles.scss';
import Showcase from './components/pages/showcase/Showcase';
import About from './components/pages/about/About';
import BearItem from './components/common/bearItem/BearItem';
import AddBear from './components/pages/addBear/AddBear';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("dark");
  
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme('dark');
  };

  return (
    <div className="App" data-theme={theme} >
    <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/add' element={<AddBear />} />
        <Route path='/showcase' element={<Showcase />}>
          <Route path=':deadieId' element={<BearItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;