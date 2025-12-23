import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container my-5 text-center">
      <div className="shadow p-5 rounded" style={{ backgroundColor: '#fff' }}>
        <h2 className="text-success mb-3">Welcome, {user?.name || 'User'}!</h2>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
