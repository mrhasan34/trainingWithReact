import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header style={styles.header}>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/" style={styles.link}>Ana Sayfa</Link>
            <Link to="/profile" style={styles.link}>Profilim</Link> {/* Güncellendi */}
            <Link to="/saved" style={styles.link}>Kaydedilenler</Link>
            <button onClick={handleLogout} style={styles.button}>Çıkış Yap</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Giriş Yap</Link>
            <Link to="/signup" style={styles.link}>Üye Ol</Link>
          </>
        )}
      </nav>
    </header>
  );
};

// Stiller aynı kalabilir

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    padding: '1rem',
    color: 'white'
  },
  link: {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none'
  },
  button: {
    marginLeft: '1rem',
    padding: '0.5rem 1rem'
  }
};

export default Header;