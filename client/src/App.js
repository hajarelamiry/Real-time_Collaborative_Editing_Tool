import Home from './component/Home';
import Edit from './component/Edit';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster position='top-center'></Toaster>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/editor/:roomId' element={<Edit />}/>
    </Routes>
    </>
  );
}

export default App;
