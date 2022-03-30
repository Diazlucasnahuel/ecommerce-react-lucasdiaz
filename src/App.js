import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ItemListContainer/ItemListContainer';
import HomeTitle from './components/HomeTitle/HomeTitle'
function App() {
  return (
    <div className="App">
      <NavBar />

      <HomeTitle />

      <ListProducts>
      <p>Productos Principales</p>
      </ListProducts>

    </div>
  );
}

export default App;
