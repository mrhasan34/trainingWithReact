import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedItems, setSavedItems] = useState([]);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>
        <Route path="/" element={
          isLoggedIn ? <Home savedItems={savedItems} setSavedItems={setSavedItems}/> : <Navigate to="/login" />
        }/>
        <Route path="/profile" element={
          isLoggedIn ? <Profile/> : <Navigate to="/login" />
        }/>
        <Route path="/saved" element={
          isLoggedIn ? <Saved savedItems={savedItems}/> : <Navigate to="/login" />
        }/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>
    </div>
  );
}

export default App;