import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'	
import { flowerUpdate, flowerShow, flowerDelete } from '../api/flower'	
import FlowerUpdate from './FlowerUpdate'

const FlowerShow = ({user, msgAlert})=>{

	const [flower, setFlower] = useState({})
	const [isUpdatedShown, setIsUpdateShown] = useState(false)


	const { id } = useParams()
	const navigate = useNavigate()
	
useEffect(()=>{
	flowerShow(user,id)
	.then(res=>{
		setFlower(res.data.flower)
	})
	.catch((error) => {
		msgAlert({
			heading: 'Failure',
			message: 'Show Failure' + error,
			variant: 'danger'
		})
	})
}, [])

const toggleShowUpdate = ()=> {
	setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
}
const handleChange = (event) => {
	// to keep the values as users input info 
	// first spread the current pet
	// then comma and modify the key to the value you need
	console.log(event.target.value)
	setFlower({...flower, [event.target.name]: event.target.value})
}

const handleUpdateFlower = () => {
	flowerUpdate(flower, user, id)
	.then(() => {
		msgAlert({
			heading: 'Success',
			message: 'Update Flower',
			variant: 'success'
		})
	})
	.catch((error) => {
		msgAlert({
			heading: 'Failure',
			message: 'Update Flower Failure' + error,
			variant: 'danger'
		})
	})
}

	return(

		
		<>
		<div className='container'>
			<h1>{flower.name}</h1>
		<article>
			<p>The primary color is {flower.primaryColor}. You should plant this flower during the {flower.shouldPlant}th month of the year.</p> 
			<button onClick={toggleShowUpdate}>Update</button>
			{isUpdatedShown && (
				<FlowerUpdate
					flower={flower}
					handleChange = {handleChange}
					handleUpdateFlower = {handleUpdateFlower}
				/>
			)}
		</article>
		</div>
	
		</>
		
	)
}

export default FlowerShow