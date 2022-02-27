import Main from './components/pages/main/Main';
import Navbar from './components/common/navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import './styles.scss';
import Showcase from './components/pages/showcase/Showcase';
import About from './components/pages/about/About';
import BearItem from './components/common/bearItem/BearItem';
import AddBear from './components/pages/showcase/addBear/AddBear';

function App() {
  return (
    <div className="App">
    <Navbar />
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