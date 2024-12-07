// src/components/RegistrationForm.jsx
import { useState } from 'react';
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log({ username,
       email,
        password });
  };

  return (
    <div>
      
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <br/>
      <br/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <br/>
      <br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <br/>
      <br/>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
