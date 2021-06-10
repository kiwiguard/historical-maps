import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Search from './components/pages/Search';
import MapView, { RenderMapItem } from './components/pages/MapView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Admin } from './components/pages/Admin';

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
          <Route path="/mapView/:id" exact component={RenderMapItem}/>
          <Route path="/admin" exact component={Admin}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
