import React, {useState} from 'react'

function AddBeer(){
    const[beer, setBeer] = useState([])
    const[formData, setFormdata] = useState({
        name: "",
        beer_type: "",
        abv: 0,
        brewery_name: "",
        image: "",
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormdata((formData)=> ({...formData, [name]: value}))
    }

    function onAddBeer(newBeer) {
        setBeer((beer)=> [...beer, newBeer])
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/beers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
            })
            .then((r)=> r.json())
            .then((data)=>{
                onAddBeer(data)
                setFormdata("")
            })
    }
    return (
        <div className='add-beer-form'>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Add Your Favorite Local Beer</h2>
                <label className='form-text'>Name</label>
                <input 
                    className='beer-form'
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={formData.name} />

                <label className='form-text'>Beer Type</label>
                <select
                    className='beer-form'
                    name='beer_type'
                    id='beer_type'
                    onChange={handleChange}
                    value={formData.beer_type}>
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
                    value={formData.brewery_name}/>

                <label className='form-text'>ABV</label>
                <input 
                    className='beer-form'
                    type="number"
                    step="0.1"
                    id='abv'
                    onChange={handleChange}
                    value={formData.abv} />

                <label className='form-text'>Image</label>
                <input 
                    className='beer-form'
                    type="text"
                    id='image'
                    name='image'
                    onChange={handleChange}
                    value={formData.image} />

                <button className='submit-button' type='submit'>Submit Beer</button>
            </form>
        </div>
    )
}

export default AddBeer