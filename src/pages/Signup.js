// Signup.js
const Signup = ({ setIsLoggedIn }) => {
    const handleSignup = () => {
      // Kayıt işlemleri sonrası
      setIsLoggedIn(true);
    };
  
    return (
      <div>
        <h1>Üye Ol</h1>
        <button onClick={handleSignup}>Üye Ol</button>
      </div>
    );
  };
  export default Signup;