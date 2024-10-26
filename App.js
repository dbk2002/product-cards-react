import React from 'react';

const ProductCard = ({ name, price, description }) => {
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '16px',
  borderRadius: '8px',
  margin: '16px',
  width: '200px',
  textAlign: 'center',
  boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
};

function App() {
  // Step 3: Create an array of products with random names and details
  const products = [
    { name: 'Aurora Lamp', price: 120, description: 'A beautiful color-changing lamp for your home.' },
    { name: 'SkyBuds Wireless Earphones', price: 80, description: 'High-quality wireless earphones with noise cancellation.' },
    { name: 'Nimbus Backpack', price: 95, description: 'A stylish and durable backpack with plenty of storage.' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default App;
