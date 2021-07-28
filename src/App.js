import './App.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Layout from './hoc/Layout/Layout';

import scullyIcon from './assets/images/scullyicon.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="#home" className="Icon">
            <img
              src={scullyIcon} width="50"
            />{' '}
            <strong>Scully Liu</strong>
          </Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#projects">My Projects</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <br /><br /><br />
      <Layout />
    </div>
  );
}

export default App;
