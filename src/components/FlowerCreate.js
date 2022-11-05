import React, { useState } from 'react' 
import { flowerCreate } from '../api/flower'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

const FlowerCreate = ({ user, msgAlert }) => {

    const defaultFlower = {
        name: '',
        primaryColor: '',
		shouldPlant:''
    }

    const [flower, setFlower] = useState(defaultFlower)

	const navigate = useNavigate()

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
			navigate('/flowers')
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
            <Container className='m-5'>
            <Form onSubmit={handleCreateFlower}>
                <Form.Label>Flower Name:</Form.Label>
				<Form.Control
					type='text'
					value={flower.name}
					placeholder= 'enter name'
					name='name'
					onChange={handleChange}
				/>
                <Form.Label>Flower's Main Color:</Form.Label>
				<Form.Control
					type='text'
					value={flower.primaryColor}
					name='primaryColor'
					placeholder= 'enter primary color'
					onChange={handleChange}
				/>
                <Form.Label>What Month of the Year Should Your Plant:</Form.Label>
				<Form.Control
					type='number'
					value={flower.shouldPlant}
					name='shouldPlant'
					placeholder= 'enter month of year numerically'
					onChange={handleChange}
				/>
				<Button type='submit'> Create Flower </Button>
                </Form>
            </Container>
			</>
		)
}

export default FlowerCreate