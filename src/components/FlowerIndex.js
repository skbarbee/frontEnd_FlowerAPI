import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'		
import { flowerIndex } from '../api/flower'


const FlowerIndex = ({user, msgAlert})=>{
	
	const [allFlowers, setAllFlowers]= useState([])
	
	useEffect(()=>{
		flowerIndex(user)
		.then(res => {
			setAllFlowers(res.data.flowers)
			console.log(allFlowers)
		})
		.catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Flower Failure' + error,
                variant: 'danger'
            })
        })
	}, [])
	
	
	const allFlowersJSX = allFlowers.map(flower =>{
		return(
		<>
			<div className="card">
			
 				<div class="card-body" key={flower._id}>
   					<Link to={`/flowers/${flower._id}`} key={flower._id}><h5 class="card-title">Name:{flower.name}</h5></Link>
					<h6 class="card-subtitle mb-2 text-muted"> Primary Color: {flower.primaryColor}</h6>
   					<p class="card-text">Your should plant your {flower.name} during the {flower.shouldPlant}
					{flower.shouldPlant >= 4 && 'th ' }{flower.shouldPlant === 2 && 'nd '}{flower.shouldPlant === 3 && 'rd '}{flower.shouldPlant === 1 && 'st '}
					month of the year.</p>
			    </div>
			</div>
			</>

		)
	})
	if (!allFlowers){
		return(
			<p>loading...</p>
		)
	}
	return(
		
		<>
		<div className='container'>
			<h1>Flower's Index</h1>
		<article className='row'>
			{allFlowersJSX}
		</article>
		</div>
	
		</>
	)
}

export default FlowerIndex