import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/Signup';
import './App.css';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />


            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
