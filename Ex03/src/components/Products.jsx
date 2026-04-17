import React from 'react';
import { Link } from 'react-router-dom';

const mockData = [
  { id: 1, name: 'Iphone' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Laptop' }
];

const Products = () => {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {mockData.map((product) => (
          <li key={product.id} style={{ margin: '10px 0' }}>
            <Link 
              to={`/products/${product.id}`} 
              style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;