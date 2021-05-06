import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Search from './components/pages/Search';
import MapView from './components/pages/MapView';
import MapView2 from './components/pages/MapView2';
import MapView3 from './components/pages/MapView3';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/about" exact component={About}/>
          <Route path="/mapView" exact component={MapView}/>
          <Route path="/mapView2" exact component={MapView2}/>
          <Route path="/mapView3" exact component={MapView3}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
