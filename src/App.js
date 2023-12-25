import './App.css';
// import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './Components/States';
import { Container } from 'react-bootstrap'

// import Home from './Components/Home';
// import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Container>       
       <States name={"Kerala"}/>
       <States name={"Tamil nadu"}/>
       <States name={"Karnataka"}/>
      </Container>


       {/* <Navbar />
       <Home />
       <Home />
       <Home />
       <Footer /> */}
    </div>
  );
}

export default App;
