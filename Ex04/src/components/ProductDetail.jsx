import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Product ID: <span style={{ color: 'red' }}>{id}</span>
      </p>
      
      <Link to="/products">← Quay lại danh sách sản phẩm</Link>
    </div>
  );
};

export default ProductDetail;