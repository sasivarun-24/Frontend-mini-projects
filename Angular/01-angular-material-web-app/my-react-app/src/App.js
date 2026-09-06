import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8081/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Failed to fetch message:", err));
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    setUsers([]); // clear old data
    fetch('http://localhost:8081/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from backend: {message}</p>
        <button onClick={fetchUsers}>Load Users</button>
        {loading && <div className="spinner"></div>}
        <div>
          {users.map(user => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.telephone}</p>
              <p>
                Address: {user.address
                  ? `${user.address.street}, ${user.address.city}, ${user.address.postalCode}, ${user.address.country}`
                  : 'No address'}
              </p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
