import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

const Title = props => {
    return (
        <Fragment>
            <Container className="d-flex m-2 justify-content-center">
                <p>{props.section}</p>
            </Container>
        </Fragment>
    );
};

export default Title;