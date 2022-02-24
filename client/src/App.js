import Main from './components/pages/main/Main';
import Navbar from './components/common/navbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import './styles.scss';
import Showcase from './components/pages/showcase/Showcase';
import About from './components/pages/about/About';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;