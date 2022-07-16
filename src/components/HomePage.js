import BeerCard from "./BeerCard";


function HomePage({beers, onDeleteBeer}) {
  console.log(beers)

    // const displayedBeer = allBeers.map(beer => {
    //   return <BeerCard beer={beer} key={beer.id} onDeleteBeer={handleDelete}/>
    // })
 
      return (
        <div className="main-container">
          <div className='home-container'>
            {beers.map((beer) => (
              <BeerCard 
                key={beer.id}
                beer={beer}
                onDeleteBeer={onDeleteBeer} />
             ))}
          </div>
        </div>
      )
    }

    export default HomePage