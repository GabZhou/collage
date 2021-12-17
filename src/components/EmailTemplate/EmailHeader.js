import React, { Fragment, useState } from "react";
import addLogo from '../../assets/add-logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const EmailHeader = props => {
    const logoInputRef = React.createRef();
    const [logo, setLogo] = useState('');

    const handleLogoChange = e => {
        setLogo(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <Fragment>
            <Row>
                <Col xs={4} className="d-flex align-items-center">
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleLogoChange}
                        ref={logoInputRef}
                    />
                    <Button
                        width="60"
                        height="60"
                        variant="outline-light"
                        className="p-0"
                        onClick={() => logoInputRef.current.click()}>
                        <Image
                            width="60"
                            height="60"
                            src={logo || addLogo}
                        />
                    </Button>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    See jobs
                </Col>
            </Row>
        </Fragment >
    );
}

export default EmailHeader;