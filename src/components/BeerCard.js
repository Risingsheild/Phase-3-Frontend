import React, {useState} from "react";
import {useNavigate,useParams} from "react-router"
import ReactCardFlip from "react-card-flip"

function BeerCard({beer, onDeleteBeer}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const navigate = useNavigate
    const params = useParams()

function handleDelete() {
    fetch(`http://localhost:9292/beers/individual/${params.id}`, {
        method: "Delete"
    })
    .then((r) => r.json())
    .then(() => onDeleteBeer(beer))
}

// function handleNewRating(rating) {
//     fetch(`http://localhost:9292/ratings`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             rating_value: rating,
//             beer_id: beer.id
//         })
//     })
//     .then(r => r.json())
//     .then(beer => console.log(beer))
// }

    function handleClickFlip(e) {
        setIsFlipped((prev) => !prev)
        console.log(e);
    }

    // function handleEditClick(){

    // }


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div id="card" className="cardFront" onClick={handleClickFlip}>
                <li>
                    <h4>{beer.name}</h4>
                    <img src={beer.image} alt={beer.name}/>
                    <p>{beer.abv}% ABV</p>
                    <p>{beer.average_rating}</p>
                </li>
            </div>
            <div className="cardBack" onClick={handleClickFlip}>
                    <li>
                        <p>{beer.name} is a {beer.beer_type}</p>
                        <p>Found at {beer.brewey_name} if you happen to visit please give this on a try</p>
                        <button className="editBeer" onClick={() => navigate(`edit/${beer.id}`)}>Edit this Beer</button>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </li>
            </div>

        </ReactCardFlip>
    )

}

export default BeerCard