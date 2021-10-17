import 'bulma/css/bulma.css';
import { Header } from './components/Header';
import { UploadForm } from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <UploadForm />
      </div>
    </div>
  );
}

export default App;
