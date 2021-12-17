import { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tiktok from '../../assets/tiktok.png';

const EmailCard = props => {
    return (
        <Fragment>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <Card.Img variant="top" src={tiktok} />
                        </Col>
                        <Col>
                            <p className="mb-1"><b>{props.job.title}</b></p>
                            <p className="mb-0">{props.job.company}</p>
                            <p className="mb-0">{props.job.location}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default EmailCard;