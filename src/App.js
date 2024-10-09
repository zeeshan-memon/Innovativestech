import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainContainer from './pages/steps/MainContainer';
function App() {
  return (
    <Router>
      <div style={{display:"flex", flexDirection:"column"}}>
      <Header/>
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/steps" element={<MainContainer />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
