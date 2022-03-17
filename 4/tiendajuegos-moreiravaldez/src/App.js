import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="temporary-container">
          <ItemListContainer  />
        </div>
      </header>
    </div>
  );
}

export default App;
