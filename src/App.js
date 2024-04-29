import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { About } from './About';
import { Projects } from './Projects';
import { Resume } from './Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
