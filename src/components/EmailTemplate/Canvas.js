import { Fragment, useState, useRef } from "react";
import EmailHeader from "./EmailHeader";
import Container from 'react-bootstrap/Container';
import EmailMessage from "./EmailMessage";
import { Stack } from "react-bootstrap";
import EmailBody from "./EmailBody";
import EmailAction from "./EmailAction";
import EmailFooter from "./EmailFooter";
import styles from './HoverEmail.module.css';
import EditButtons from "../EmailEditing/EditButtons";


const Canvas = props => {
    const defaultList = [
        <EmailHeader />,
        <EmailMessage />,
        <EmailBody jobs={props.jobs} />,
        <EmailAction />,
        <EmailFooter />
    ];

    const defaultBtnDisplay = new Array(defaultList.length).fill('none');

    const [list, setList] = useState(defaultList);
    const [dragging, setDragging] = useState(false);
    const [btnDisplay, setBtnDisplay] = useState(defaultBtnDisplay);

    const dragIndex = useRef();
    const dragComponent = useRef();

    const handleDragStart = (e, index) => {
        dragComponent.current = e.target;
        dragComponent.current.addEventListener('dragend', handleDragEnd);
        dragIndex.current = index;
        setTimeout(() => {
            setDragging(true);
        }, 0)
        setBtnDisplay(defaultBtnDisplay);
    }

    const handleDragEnter = (e, index) => {
        if (dragComponent.current !== e.target) {
            setList(list => {
                list.splice(index, 0, list.splice(dragIndex.current, 1)[0]);
                dragIndex.current = index;
                localStorage.setItem('List', list);
                return [...list];
            });
        }
    }

    const handleDragEnd = (e) => {
        setDragging(false);
        dragIndex.current = null;
        dragComponent.current.removeEventListener('dragend', handleDragEnd);
        dragComponent.current = null;
    }

    const handleMouseEnter = (index) => {
        setBtnDisplay(oldDisplay => {
            let newDisplay = JSON.parse(JSON.stringify(oldDisplay));
            newDisplay.splice(index, 1, 'inline-block');
            localStorage.setItem('Display', JSON.stringify(newDisplay));
            return newDisplay;
        })
    }
    const resetBtnDisplay = () => {
        setBtnDisplay(defaultBtnDisplay);
    }

    return (
        <Fragment>
            <Container fluid>
                <Stack gap={3}>
                    {list.map((component, index) => (
                        <Container fluid draggable
                            key={`${index}`}
                            className={styles.container}
                            onDragStart={(e) => { handleDragStart(e, index) }}
                            onDragEnter={dragging ? (e) => { handleDragEnter(e, index) } : null}
                            onMouseEnter={() => { handleMouseEnter(index) }}
                            onMouseLeave={resetBtnDisplay}
                        >
                            <EditButtons display={btnDisplay[index]} />
                            {component}
                        </Container>
                    ))}
                </Stack>
            </Container>
        </Fragment >
    );
}

export default Canvas;