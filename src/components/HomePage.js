import React, {useEffect,useState} from "react";
import BeerCard from "./BeerCard";
// import { Params } from "react-router-dom";

function HomePage(beers) {
    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/beers')
        .then((r)=> r.json())
        .then((data) => setAllBeers(data))
    },[])

    function handleRemove(deletedBeer){
      const newBeerList = allBeers.filter((beer) => beer.id !== deletedBeer.id)
      setAllBeers(newBeerList)
    }
 
      return (
        <div className="main-container">
          <div className='home-container'>
            <BeerCard
               beer={beers}
               key={beers.id}
               onDeleteBeer={handleRemove} />
          </div>
        </div>
      )
    }

    export default HomePage