
import './App.css';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <div className="App">
     
      <Router>
      <Header/>
      <NavigationBar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
      
        <Route  path="/footer" element={<Footer/>}/>
        </Routes>
      </Router>
      <Footer/>
   
    </div>
  );
}

export default App;
