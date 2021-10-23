import QuotesState from "./context/quotes/QuotesState";
import AuthState from "./context/auth/AuthState";

import "bulma/css/bulma.css";
import { Section } from "./Section";
function App() {
	return (
		<AuthState>
			<QuotesState>
				<div className='App'>
					<Section />
				</div>
			</QuotesState>
		</AuthState>
	);
}

export default App;
