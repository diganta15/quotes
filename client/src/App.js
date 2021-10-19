import 'bulma/css/bulma.css';
import { Header } from './components/Header';
import { Quotes } from './components/Quotes/Quotes';
import { UploadForm } from './components/UploadForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Login } from './components/Login';
import { NotFound } from './404';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="section">
          <Switch>
          <Route exact path='/' component={Quotes} />
        <Route exact path='/upload' component={UploadForm} />
        <Route exact path ='/login' component={Login} />
        <Route component={NotFound} />
          </Switch>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
