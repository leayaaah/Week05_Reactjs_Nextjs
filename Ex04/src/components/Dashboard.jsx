import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Khu vực Dashboard</h2>
      
      <div style={{ display: 'flex', border: '1px solid #ccc', minHeight: '300px' }}>
        <div style={{ width: '200px', borderRight: '1px solid #ccc', padding: '15px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}><Link to="profile">Profile</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="orders">Orders</Link></li>
            <li style={{ marginBottom: '10px' }}><Link to="settings">Settings</Link></li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;