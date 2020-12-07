import "./App.css";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList />
      <Filter />
    </div>
  );
}

export default App;
