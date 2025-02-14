// Saved.js
const Saved = ({ savedItems }) => {
    return (
      <div>
        <h1>Kaydedilenler</h1>
        {savedItems.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Kategori: {item.category}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Saved;