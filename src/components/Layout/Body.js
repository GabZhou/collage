import { Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Template from "../EmailTemplate/Template";

const Body = props => {
    const style = {
        col: {
            height: '100vh'
        }
    };

    return (
        <Fragment>
            <Container fluid className="m-0">
                <Row>
                    <Col style={style.col} className="col-8 bg-light d-flex justify-content-center">
                        <Col xs={6}><Template jobs={props.jobs} /></Col>
                    </Col>
                    <Col style={style.col} className="col-4 shadow-sm p-3 mb-5 bg-white rounded bg-white">
                        Editing window</Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Body;