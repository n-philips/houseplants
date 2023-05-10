import { Routes, Route } from 'react-router-dom';
import Houseplants from './pages/Houseplants';
import Details from './pages/Details';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Houseplants/>} />
      <Route path="/details" element={<Details/>}/>
    </Routes>
  )
}

export default App;
