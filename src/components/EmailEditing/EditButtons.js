import { Fragment } from "react";
import editIcon from '../../assets/edit.png';
import duplicateIcon from '../../assets/duplicate.png';
import deleteIcon from '../../assets/delete.png';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const EditButtons = props => {
    const buttons = [
        ['Edit', editIcon],
        ['Dup', duplicateIcon],
        ['Del', deleteIcon]
    ];
    return (
        <Fragment>
            <Stack
                direction="horizontal"
                gap={1}
                style={{
                    position: "absolute",
                    top: "0.1rem",
                    right: "0.1rem",
                }}
            >
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        className="p-1"
                        variant="outline-warning"
                        style={{ display: props.display }}>
                        <img
                            height="20"
                            width="20"
                            src={button[1]}
                            alt={button[0]}
                        />
                    </Button>
                ))}
            </Stack>
        </Fragment >
    );
}

export default EditButtons;