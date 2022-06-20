// import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import UpperToolBar from './components/UpperToolBar';

function App() {
  return (
    <div className="App">
      <Container className='d-flex justify-content-center m-2 mx-auto'>
        <UpperToolBar/>
      </Container>
    </div>
  );
}

export default App;
