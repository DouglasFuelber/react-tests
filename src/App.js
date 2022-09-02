import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry";

function App() {
	return (
		<Container>
			<OrderDetailsProvider>
				{/*Summary page and entry page need provider*/}
				<OrderEntry />
			</OrderDetailsProvider>
			{/*Confirmation page and entry page need provider*/}
		</Container>
	);
}

export default App;
