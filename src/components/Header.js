import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-section">
          <Link to="/" className="logo">Hobby Garden</Link>
        </div>
        <div className="right-section">
          {isLoggedIn ? (
            <>
              <Link to="/" className="nav-link">ANA SAYFA</Link>
              <Link to="/profile" className="nav-link">PROFİLİM</Link>
              <button onClick={handleLogout} className="logout-button">Çıkış Yap</button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">ANA SAYFA</Link>
              <Link to="/login" className="nav-link">GİRİŞ</Link>
              <Link to="/signup" className="nav-link">Üye Ol</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;