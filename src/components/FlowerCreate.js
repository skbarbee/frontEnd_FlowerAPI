import React, { useState } from 'react' 
import { flowerCreate } from '../api/flower'

const FlowerCreate = ({ user, msgAlert }) => {

    const defaultFlower = {
        name: '',
        primaryColor: '',
		shouldPlant:''
    }

    const [flower, setFlower] = useState(defaultFlower)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setFlower({...flower, [event.target.name]: event.target.value})
    }

    const handleCreateFlower = () => {
        flowerCreate(flower, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Flower',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Flower Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={flower.name}
					placeholder= 'enter name'
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={flower.primaryColor}
					name='primaryColor'
					placeholder= 'enter primary color'
					onChange={handleChange}
				/>
				<input
					type='number'
					value={flower.shouldPlant}
					name='shouldPlant'
					placeholder= 'enter month of year numerically'
					onChange={handleChange}
				/>
				<button onClick={handleCreateFlower}> Create Flower </button>
			</>
		)
}

export default FlowerCreate