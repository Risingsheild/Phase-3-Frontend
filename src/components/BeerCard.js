import React, {useState} from "react";
import {useNavigate} from "react-router"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function BeerCard({beer, onDeleteBeer}) {
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate()
   // const params = useParams()

// console.log(beer)
function handleExpandedClick (e) {
    e.preventDefault();
    setExpanded(!expanded)
}

function handleDelete() {
    fetch(`http://localhost:9292/beers/${beer.id}`, {
        method: "Delete"
    })
    .then((r) => r.json())
    .then(() => onDeleteBeer(beer.id))
}

function postNewRating(rating) {
    fetch(`http://localhost:9292/ratings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            rating_value: rating,
            beer_id: beer.id
        })
    })
    .then(r => r.json())
    .then(data => console.log(data))
}

    function handleNewRating(e) {
        postNewRating(e.target.value)
    }

    return (
       <div className="card-container">
        <Card className="beer-card" sx={{ maxWidth: 345, border :1 }}>
            <CardHeader className="card-header"
                title={beer.name}
                subheader={beer.beer_type}/>
            <img className="card-image" src={beer.image} alt={beer.name}/>
            <CardActions disableSpacing>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={() => navigate(`edit/${beer.id}`)}>
                    <EditIcon /> 
                </IconButton>
                    <h4>Please Rate this Beer</h4>
                    <Rating precision={0.5} onClick={handleNewRating}/>
                <ExpandMore expand={expanded}
                    onClick={handleExpandedClick}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <p>Found Here at {beer.brewery_name}</p>
                    <p>ABV is {beer.abv}%</p>
                    <h4>The Average Rating</h4>
                    <Rating defaultValue={beer.average_rating} precision={0.5} readOnly/>
                </CardContent>
            </Collapse>
        </Card>
       </div>
    )
}

export default BeerCard