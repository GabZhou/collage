import { Fragment } from "react";
import './EditButtons.css'
import edit from '../../assets/material-outlined-24/edit.png';
import reorder from '../../assets/material-outlined-24/reorder.png';
import dup from '../../assets/material-outlined-24/duplicate.png';
import del from '../../assets/material-outlined-24/delete.png';
import { ButtonGroup, Button, Container } from "react-bootstrap";

const EditButtons = props => {
    const buttons = [
        ['edit', edit],
        ['reorder', reorder],
        ['duplicate', dup],
        ['delete', del]
    ];

    const handleClick = (e, btn, index) => {
        if (btn !== 'reorder') {
            props.onBtnEvents(btn, index);
        }
    };

    const handleMouseDown = (e, btn, index) => {
        if (btn === 'reorder') {
            props.onBtnEvents(btn, index);
        }
    };

    return (
        <Fragment>
            <Container className="btns-wrapper-edit p-0">
                <ButtonGroup className="btn-group-edit">
                    {buttons.map((button) => (
                        <Button
                            key={button[0]}
                            className="btn-edit"
                            variant="light"
                            style={{ display: props.display }}
                            onClick={(e) => { handleClick(e, button[0], props.index) }}
                            onMouseDown={(e) => { handleMouseDown(e, button[0], props.index) }}
                        >
                            <img
                                className="btn-icon"
                                height="20"
                                width="20"
                                src={button[1]}
                                alt={button[0]}
                            />
                        </Button>
                    ))}
                </ButtonGroup>
            </Container>
        </Fragment >
    );
}

export default EditButtons;