import { Fragment } from "react";
import Canvas from './Canvas'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Template = props => {
    return (
        <Fragment>
            <Container className="shadow-sm p-3 my-3 bg-white rounded">
                <Row>
                    <Col>
                        <Canvas jobs={props.jobs} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Template;