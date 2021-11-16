import React from "react";
import AuthNavigation from "./src/routes/AuthNavigation";

import { Provider } from "react-redux"; //Redux stuff
import store from "./src/Redux/store";

export default function App() {
	return (
		<Provider store={store}>
			<AuthNavigation />
		</Provider>
	);
}
