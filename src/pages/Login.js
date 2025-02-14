// Login.js
const Login = ({ setIsLoggedIn }) => {
    const handleLogin = () => {
      // Gerçek bir auth sistemi için API çağrısı yapılmalı
      setIsLoggedIn(true);
    };
  
    return (
      <div>
        <h1>Giriş Yap</h1>
        <button onClick={handleLogin}>Giriş Yap</button>
      </div>
    );
  };
  export default Login;