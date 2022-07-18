import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import AddBeer from "./components/AddBeer";
import EditBeerPage from "./components/EditBeerPage"
import "./components/style.css"

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/beers')
    .then((r)=> r.json())
    .then((data) => setBeers(data))
},[])


function handleDelete(id) {
  const newBeerList = beers.filter((beer) => beer.id !== id)
  setBeers(newBeerList)
}

function onAddBeer(newBeer) {
  setBeers([...beers, newBeer])
}

function updateBeer(currentBeer){ 
  const newBeerItem = beers.map((beer) =>
  beer.id === currentBeer.id ? {...beer, }: beer)
  setBeers(newBeerItem)
}

  return (
    <div className="App">
      <h3>Best local Beers</h3>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<HomePage beers={beers} onDeleteBeer={handleDelete}/>}/>
        <Route path='/add-a-beer' exact element={<AddBeer onAddBeer={onAddBeer}/>}/>
        <Route path='/beer/:id/edit' exact element={<EditBeerPage beer={beers} onUpdateBeer={updateBeer}/>}/>
      </Routes>
    </div>
  );
}

export default App;
