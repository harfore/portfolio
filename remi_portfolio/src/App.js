import logo from './logo.svg';
import './App.css';
import { Welcome } from './index.js';
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
      </header>
      <Footer />
    </div>
  );
}

export default App;
