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

    const displayedBeer = allBeers.map(beer => {
      return <BeerCard beer={beer} key={beer.id} onDeleteBeer={handleRemove}/>
    })
 
      return (
        <div className="main-container">
          <div className='home-container'>
            {displayedBeer}
          </div>
        </div>
      )
    }

    export default HomePage