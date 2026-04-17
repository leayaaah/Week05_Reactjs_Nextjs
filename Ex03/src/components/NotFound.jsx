import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff4d4f' }}>404</h1>
      <h2>Trang bạn tìm kiếm không tồn tại!</h2>
      <p>Có vẻ như bạn đã gõ sai đường dẫn hoặc trang này đã bị xóa.</p>
      {/* Cung cấp lối thoát cho người dùng */}
      <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
        ← Quay về Trang chủ
      </Link>
    </div>
  );
};

export default NotFound;