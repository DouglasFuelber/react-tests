import { useState } from "react";
import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";

export default function App() {
	const [orderPhase, setOrderPhase] = useState("inProgress");

	let Component = OrderEntry;
	switch (orderPhase) {
		case "inProgress":
			Component = OrderEntry;
			break;
		case "review":
			Component = OrderSummary;
			break;
		case "completed":
			Component = OrderConfirmation;
			break;
		default:
	}

	return (
		<OrderDetailsProvider>
			<Container>{<Component setOrderPhase={setOrderPhase}></Component>}</Container>
		</OrderDetailsProvider>
	);
}
