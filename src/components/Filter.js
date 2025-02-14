const Filter = ({ selectedCategory, setSelectedCategory }) => {
    const categories = ['Bitki', 'Hayvan', 'Edebiyat', 'Yazı', 'Diğer'];
  
    return (
      <div style={styles.container}>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.select}
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
    );
  };
  
  const styles = {
    container: {
      margin: '2rem 0',
      textAlign: 'center'
    },
    select: {
      padding: '0.5rem',
      width: '200px'
    }
  };
  
  export default Filter;