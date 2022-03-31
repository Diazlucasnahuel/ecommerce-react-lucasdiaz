import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ItemListContainer/ItemListContainer';
import HomeTitle from './components/HomeTitle/HomeTitle'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <div className="App">
      <NavBar />

      <HomeTitle />

      <ListProducts>
      <p>Productos Principales</p>
      </ListProducts>

      <ItemDetailContainer />
    </div>
  );
}

export default App;
