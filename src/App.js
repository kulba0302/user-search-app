import React from 'react';
import 'typeface-roboto';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import './App.css';

import Routes from './routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Container maxWidth="lg">
              <Routes />
          </Container>
      </Router>
    </div>
  );
}

export default App;
