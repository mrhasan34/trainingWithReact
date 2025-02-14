import { useState } from 'react';
import Filter from '../components/Filter';

const Home = ({ savedItems, setSavedItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Örnek veriler
  const items = [
    { id: 1, title: 'Bitki Bakımı', category: 'Bitki' },
    { id: 2, title: 'Köpek Eğitimi', category: 'Hayvan' },
    { id: 3, title: 'Şiir Defteri', category: 'Edebiyat' }
  ];

  const filteredItems = selectedCategory 
    ? items.filter(item => item.category === selectedCategory)
    : items;

  const handleSave = (item) => {
    if (!savedItems.some(saved => saved.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hobby Garden</h1> {/* Stil ekledim */}
      <Filter 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <div style={styles.itemsContainer}>
        {filteredItems.map(item => (
          <div key={item.id} style={styles.item}>
            <h3>{item.title}</h3>
            <p>Kategori: {item.category}</p>
            <button onClick={() => handleSave(item)} style={styles.button}>
              Kaydet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1rem'
  },
  item: {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '8px',
    width: '300px'
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 1rem'
  }
};

export default Home;