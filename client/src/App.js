import 'bulma/css/bulma.css';
import { Header } from './components/Header';
import { UploadForm } from './components/UploadForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login } from './components/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="section">
          <Switch>
        <Route exact path='/upload' component={UploadForm} />
        <Route exact path ='/login' component={Login} />
          </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
