import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer />

      <ListProducts />
    </div>
  );
}

export default App;
