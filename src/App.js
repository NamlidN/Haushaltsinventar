import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Kleiner from './pages/KLEIN/Klein.js';
import Mitte from './pages/MITTEL/Mittel.js';
import Big from './pages/Big/Big.js';
import Wal from './pages/Wal/Wal.js';
import Home from './pages/HOME/Home.js';
import GAdd from './components/ADD/GAdd.js';
import KAdd from './components/ADD/KAdd.js';
import MAdd from './components/ADD/MAdd.js';
function App() {

  return (
    <>
<Router>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/k" element={<Kleiner/>}/>
<Route path="/m" element={<Mitte/>}/>
<Route path="/g" element={<Big/>}/>
<Route path="/o" element={<Wal/>}/>
<Route path="/og" element={<GAdd/>}/>
<Route path="/ok" element={<KAdd/>}/>
<Route path="/om" element={<MAdd/>}/>


</Routes>


</Router>

    </>
  );
}

export default App;
