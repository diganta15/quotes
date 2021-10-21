import "bulma/css/bulma.css";
import { Header } from "./components/Header";
import { Quotes } from "./components/Quotes/Quotes";
import { UploadForm } from "./components/UploadForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { RegisterForm } from "./components/RegisterForm";
import { NotFound } from "./404";
import { Dashboard } from "./components/Dashboard";
import QuotesState from "./context/quotes/QuotesState";
function App() {
	return (
		<QuotesState>
			<Router>
				<div className='App'>
					<Header />
					<div className='section'>
						<Switch>
							<Route exact path='/' component={Quotes} />
							<Route exact path='/upload' component={UploadForm} />
							<Route exact path='/register' component={RegisterForm} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/dashboard' component={Dashboard} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		</QuotesState>
	);
}

export default App;
