import './App.css';

// Hello World Component
function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to React JS.</p>
    </div>
  );
}

// Main Component
function App() {

  const name = "Kanishka";
  const age = 20;

  return (
    <div className="container">

      <HelloWorld />

      <h2>My First React Application</h2>

      <p>My name is {name}</p>

      <p>My age is {age}</p>

      <p>Next year my age will be {age + 1}</p>

      <h3>Dynamic Expression: {10 + 20}</h3>

    </div>
  );
}

export default App;