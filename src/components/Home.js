import { Container } from "react-bootstrap"
import FlowerIndex from "./FlowerIndex"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<Container className="mt-5">
			
			<FlowerIndex />
		</Container>
		</>
	)
}

export default Home
