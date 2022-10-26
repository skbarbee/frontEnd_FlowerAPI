import React from 'react'	

const FlowerUpdate = ({flower, handleChange, handleUpdateFlower})=>{

	
	return(
		<>
			<input
				type='text'
				value={flower.name}
				name='name'
				onChange={handleChange}
			/>
			<input
				type='text'
				value={flower.primaryColor}
				name='primaryColor'
				onChange={handleChange}
			/>
			<input
				type='number'
				value={flower.shouldPlant}
				name='shouldPlant'
				onChange={handleChange}
			/>
			<button onClick={handleUpdateFlower}> Update Flower </button>
		</>
	)
}

export default FlowerUpdate