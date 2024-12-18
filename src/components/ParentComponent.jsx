// ParentComponent.jsx
import React, { useState } from 'react';
import Login from './Login';

const ParentComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Login setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated && <p>Welcome, you are logged in!</p>}
    </div>
  );
};

export default ParentComponent;
