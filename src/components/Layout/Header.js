import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import headerIcon from '../../assets/header-icon.png';

const Header = props => {
    return (
        <Fragment>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={headerIcon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Email Builder
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;