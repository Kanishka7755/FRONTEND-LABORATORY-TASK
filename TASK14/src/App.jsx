import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      message: message
    });

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="container">

      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Submit</button>

      </form>

      {submittedData && (
        <div className="result">
          <h2>Submitted Details</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}

    </div>
  );
}

export default App;