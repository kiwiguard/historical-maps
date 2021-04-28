import './App.css';
import DataFetcher from './services/DataFetcher'
import StartPage from './components/StartPage'

function App() {
  return (
    <div className="App">
      <StartPage />
      <DataFetcher />
    </div>
  );
}

export default App;
