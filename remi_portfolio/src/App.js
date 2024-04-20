import logo from './logo.svg';
import './App.css';
import { Welcome } from './index.js';
import { Header } from './Header';
import { Footer } from './Footer';
import { Projects } from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
