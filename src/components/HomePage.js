import React, {useEffect,useState} from "react";
import BeerCard from "./BeerCard";


function HomePage() {
    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/beers')
        .then((r)=> r.json())
        .then((data) => setAllBeers(data))
    },[])

    function deleteBeer(deletedBeer){
        const beerList = allBeers.filter((beer) => beer.id !== deletedBeer.id)
        setAllBeers(beerList)
    }

    return (
        <div>
             <BeerCard
                onDeleteBeer={deleteBeer}
                />
        </div>
    )
}

export default HomePage