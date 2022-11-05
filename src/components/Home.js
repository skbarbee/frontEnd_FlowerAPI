import FlowerIndex from "./FlowerIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div style={{marginTop:"4px"}}>
			
			<FlowerIndex />
		</div>
		</>
	)
}

export default Home
