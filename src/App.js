import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import AddBeer from "./components/AddBeer";
import EditBeerPage from "./components/EditBeerPage"


function App() {
  return (
    <div className="App">
      <h3>Best local Beers</h3>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/' exact element={<AddBeer/>}/>
        <Route path='/edit/:id' exact element={<EditBeerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
