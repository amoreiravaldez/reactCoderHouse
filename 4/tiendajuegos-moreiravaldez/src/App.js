import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListContainer from './component/ItemListContainer';

const greeting = "En la siguiente entrega: mayor customización! Estoy con un tema laboral jaja (este es el ItemListContainer)"

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="temporary-container">
          <ItemListContainer  greeting={greeting}/>
        </div>
      </header>
    </div>
  );
}

export default App;
