import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataFetcher from './services/DataFetcher';
import StartPage from './components/StartPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <StartPage />
      <DataFetcher />
    </div>
  );
}

export default App;
