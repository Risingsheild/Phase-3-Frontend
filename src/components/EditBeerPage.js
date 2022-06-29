import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function EditBeer() {
    const [beerData, setBeerData] = useState({
        name: "",
        beer_type: "",
        abv: 0,
        brewery_name: "",
        image: "",
    })

    const params = useParams()

    useEffect(()=> { 
    fetch(`http://localhost:9292/beers/individual/${params.id}`)
    .then(res => res.json())
    .then(data => setBeerData(data))

    },[])

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/beers/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(beerData)
        })
        .then((r) => r.json())
        .then((data)=> {
            beerData(data)
            setBeerData("") })            
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormdata((formData)=> ({...formData, [name]: value}))
    }

    return (
        <div className='add-beer-form'>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Edit this Beer</h2>
                <label className='form-text'>Name</label>
                <input 
                    className='beer-form'
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={beerData.name} />

                <label className='form-text'>Beer Type</label>
                <select
                    className='beer-form'
                    name='beer_type'
                    id='beer_type'
                    onChange={handleChange}
                    value={beerData.beer_type}>
                        <option value=''>Select</option>
                        <option value='Pilsner'>Pilsner</option>
                        <option value='Porter'>Porter</option>
                        <option value='Amber'>Amber</option>
                        <option value='Red ale'>Red Ale</option>
                        <option value='Saison'>Saison</option>
                        <option value='IPA'>IPA</option>
                </select>

                <label className='form-text'>Brewery</label>
                <input 
                    className='beer-form'
                    type='text'
                    id="brewery_name"
                    name="brewery_name"
                    onChange={handleChange}
                    value={beerData.brewery_name}/>

                <label className='form-text'>ABV</label>
                <input 
                    className='beer-form'
                    type="number"
                    step="0.1"
                    id='abv'
                    onChange={handleChange}
                    value={beerData.abv} />

                <label className='form-text'>Image</label>
                <input 
                    className='beer-form'
                    type="text"
                    id='image'
                    name='image'
                    onChange={handleChange}
                    value={beerData.image} />

                <button className='submit-button' type='submit'>Saves Changes to Beer</button>
            </form>
        </div>
    )
}

export default EditBeer
