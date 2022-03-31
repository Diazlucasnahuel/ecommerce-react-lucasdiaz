import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import HomeTitle from './components/HomeTitle/HomeTitle'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <div className="App">
      <NavBar />

      <HomeTitle />

      <ItemListContainer>
      <p>Productos Principales</p>
      </ItemListContainer>

      <ItemDetailContainer />
    </div>
  );
}

export default App;
