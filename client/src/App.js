import Home from './component/Home';
import Edit from './component/Edit';
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/editor' element={<Edit />}/>
    </Routes>
    </>
  );
}

export default App;
