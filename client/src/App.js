import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import LoginedHome from './loginedPages/HomeLogined/HomeLogined';
import { useState } from 'react';
import UserSettings from './helpers/UserSettings/UserSettings';

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    setUser(null); 
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route 
          path="/auth/*" 
          element={<AuthPage login={login} />} 
        />
        
        <Route 
          path="/loginedhome" 
          element={user ? <Navigate to={'/auth/login'} /> : <LoginedHome user={user} logout={logout} />} 
        />
        
        <Route 
          path="/settings"
          element={user ? <Navigate to="/auth/login" /> : <UserSettings /> } 
        />
      </Routes> 
    </Router>
  );
}

export default App;
