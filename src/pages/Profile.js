const Profile = () => {
  // Örnek kullanıcı verileri
  const user = {
    name: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    joined: "2023-01-15",
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profilim</h1>
      <div style={styles.profileCard}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Üyelik Tarihi: {user.joined}</p>
      </div>
    </div>
  );
};

const styles = {
  profileCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    maxWidth: '400px',
    margin: '1rem auto',
  },
};

export default Profile;