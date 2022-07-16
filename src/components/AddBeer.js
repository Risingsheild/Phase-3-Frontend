import React, {useState} from 'react'

function AddBeer({onAddBeer}){
    const defaultImage = "https://pngimg.com/uploads/beer/beer_PNG2376.png"
    const[name, setName] = useState("")
    const[beer_type, setBeer_type] = useState("")
    const[abv, setAbv] = useState(0)
    const[brewery_name, setBrewery_name] = useState("")
    const[image, setImage] = useState(defaultImage)
  

    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeBeerType(e) {
        setBeer_type(e.target.value)
    }

    function handleChangeAbv(e) {
        setAbv(e.target.value)
    }

    function handleChangeBreweryName(e) {
        setBrewery_name(e.target.value)
    }

    function handleChangeImage(e) {
        setImage(e.target.value)
    }

  
    function handleSubmit(e){
        e.preventDefault();
        const beerItem ={ 
            name: name,
            beer_type: beer_type,
            abv: abv,
            brewery_name: brewery_name,
            image: image
        }

        fetch("http://localhost:9292/beers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(beerItem)
            })
            .then((r)=> r.json())
            .then((data)=> {
                onAddBeer(data)
                setName("")
                setBeer_type("")
                setAbv("")
                setBrewery_name("")
                setImage("")  
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
                    onChange={handleChangeName}
                    value={name} />

                <label className='form-text'>Beer Type</label>
                <select
                    className='beer-form'
                    name='beer_type'
                    id='beer_type'
                    onChange={handleChangeBeerType}
                    value={beer_type}>
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
                    onChange={handleChangeBreweryName}
                    value={brewery_name}/>

                <label className='form-text'>ABV</label>
                <input 
                    className='beer-form'
                    type="number"
                    step="0.1"
                    id='abv'
                    onChange={handleChangeAbv}
                    value={abv} />

                <label className='form-text'>Image</label>
                <input 
                    className='beer-form'
                    type="text"
                    id='image'
                    name='image'
                    onChange={handleChangeImage}
                    value={image} />

                <button className='submit-button' type='submit'>Submit Beer</button>
            </form>
        </div>
    )
}

export default AddBeer