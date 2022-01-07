import { Container, Row, Col } from 'react-bootstrap';
import Template from "../EmailTemplate/Template";
import SideBar from "../EmailEditing/SideBar";
import { Fragment, useState } from 'react';

const Body = props => {
    const style = {
        col: {
            height: '100vh'
        }
    };

    const [section, setSection] = useState('');

    const handleSelectSection = (selectedSection) => {
        setSection(selectedSection);
    };

    return (
        <Fragment>
            <Container fluid className="m-0">
                <Row>
                    <Col style={style.col} className="col-8 bg-light d-flex justify-content-center">
                        <Col xs={8}>
                            <Template
                                jobs={props.jobs}
                                onSelectSection={handleSelectSection}
                            /></Col>
                    </Col>
                    <Col style={style.col} className="col-4 shadow-sm p-0 mb-5 bg-white rounded bg-white">
                        <SideBar
                            section={section}
                        />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Body;