import { Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import headerIcon from '../../assets/header-icon.png';

const Header = props => {
    return (
        <Fragment>
            <Navbar className="shadow-sm p-3 mb-0 bg-white rounded">
                <Container fluid>
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