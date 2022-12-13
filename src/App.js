import './App.css';
import {buttons} from "./utils/Generator";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ButtonFilters from "./components/ButtonFilters/ButtonFilters";
import FilterByColor from "./components/FilterByColor/FilterByColor";
import FilterByCost from "./components/FilterByCost/FilterByCost";
import Cards from "./components/Cards/Cards";
import {useState} from "react";
import generateCards from "./utils/Generator";
import TotalGoods from "./components/TotalGoods/TotalGoods";

function App() {
  const cardsNumber = 2000;
  const [cards, setCards] = useState([...generateCards(cardsNumber)])
  const [amountOfFilteredCards, setAmountOfFilteredCards] = useState(cardsNumber)
  const [colorFilter, setColorFilter] = useState(new Set())
  const [costFilter, setCostFilter] = useState(new Map([["min", 0], ["max", 9999]]))
  const [btnSort, setBtnSort] = useState({fn: () => {}})
  const [strFilter, setStrFilter] = useState("")

  return (
    <div className="App">
      <SearchPanel setSearch={setStrFilter}/>
      <ButtonFilters buttons={buttons} setSort={setBtnSort}/>
      <FilterByColor colorFilter={colorFilter} setColorFilter={setColorFilter}/>
      <FilterByCost costFilter={costFilter} setCostFilter={setCostFilter}/>
      <Cards
        cards={cards}
        setAmountOfFilteredCards={setAmountOfFilteredCards}
        colorFilter={colorFilter}
        costFilter={costFilter}
        btnSort={btnSort.fn}
        strFilter={strFilter}
      />
      <TotalGoods> {amountOfFilteredCards} </TotalGoods>
    </div>
  );
}

export default App;
