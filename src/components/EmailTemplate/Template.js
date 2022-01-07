import { Fragment } from "react";
import Canvas from './Canvas'
import { Container, Row, Col } from 'react-bootstrap';

const Template = props => {
    console.log(props)
    return (
        <Fragment>
            <Container className="shadow-sm p-3 my-3 bg-white rounded">
                <Row>
                    <Col>
                        <Canvas props={props} />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Template;