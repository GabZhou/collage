import { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmailFooter = props => {

    return (
        <Fragment>
            <Row>
                <Col className="bg-light mx-2">
                    <p>Copyright</p>
                    {/* <a href="#" className="link-primary">Edit alerts</a>{' '}
                        <a href="#" class="link-secondary">Unsubscribe</a> */}
                </Col>
            </Row>
        </Fragment>
    );
}

export default EmailFooter;