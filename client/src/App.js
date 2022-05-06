import './stylesheets/App.css';
import { useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to PogChat</h3>

        <button className='login-button'>Login</button>
        <button className='signup-button' > Sign Up </button>
      </header>
    </div>
  );
}

export default App;
