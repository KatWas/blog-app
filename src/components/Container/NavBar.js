import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/NavBar';


function NavBar() {
    return (
        <Nav bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Container>
                <NavBar className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </NavBar>
            </Container>
            ); 
}

export default NavBar;