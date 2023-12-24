import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
       <Navbar />
       <Home />
       <Home />
       <Home />
       <Footer />
    </div>
  );
}

export default App;
