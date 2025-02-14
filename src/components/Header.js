import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.leftSection}>
          <Link to="/" style={styles.link}>Hobby Garden</Link>
        </div>
        <div style={styles.rightSection}>
          {isLoggedIn ? (
            <>
              <Link to="/" style={styles.link}>ANA SAYFA</Link>
              <Link to="/profile" style={styles.link}>PROFİLİM</Link>
              <button onClick={handleLogout} style={styles.button}>Çıkış Yap</button>
            </>
          ) : (
            <>
              <Link to="/" style={styles.link}>ANA SAYFA</Link>
              <Link to="/login" style={styles.link}>GİRİŞ</Link>
              <Link to="/signup" style={styles.link}>Üye Ol</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

// Stiller
const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  leftSection: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#34495e'
    }
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#c0392b'
    }
  }
};

export default Header;