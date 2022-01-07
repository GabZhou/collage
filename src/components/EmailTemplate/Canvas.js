import { Fragment, useState, useRef } from "react";
import EmailHeader from "./EmailHeader";
import EmailMessage from "./EmailMessage";
import { Container, Col, Stack } from "react-bootstrap";
import EmailBody from "./EmailBody";
import EmailAction from "./EmailAction";
import EmailFooter from "./EmailFooter";
import styles from './HoverEmail.module.css';
import EditButtons from "../EmailEditing/EditButtons";


const Canvas = props => {
    const defaultList = [
        { section: EmailHeader, id: 'Email Header', sectionProps: {} },
        { section: EmailMessage, id: 'Email Message', sectionProps: {} },
        { section: EmailBody, id: 'Email Body', sectionProps: { jobs: props.props.jobs } },
        { section: EmailAction, id: 'Email Action', sectionProps: {} },
        { section: EmailFooter, id: 'Email Footer', sectionProps: {} }
    ];

    const defaultBtnDisplay = new Array(defaultList.length).fill('none');
    const defaultEditBtn = new Array(defaultList.length).fill(false);

    const [list, setList] = useState(defaultList);
    const [dragging, setDragging] = useState(false);
    const [btnDisplay, setBtnDisplay] = useState(defaultBtnDisplay);
    const [editBtn, setEditBtn] = useState(defaultEditBtn);

    const dragIndex = useRef();
    const dragComponent = useRef();
    const dragEnter = useRef();

    const handleDragStart = (e, index) => {
        if (index !== dragIndex.current) {
            e.preventDefault();
        } else {
            dragComponent.current = e.target;
            dragComponent.current.addEventListener('dragend', handleDragEnd);
            setDragging(true);
        }
    };

    const handleDragEnter = (e) => {
        dragEnter.current = e.target;
    }

    const handleDragLeave = (e, index) => {
        if (e.target !== dragComponent.current && e.target === dragEnter.current) {
            setList(list => {
                list.splice(index, 0, list.splice(dragIndex.current, 1)[0]);
                dragIndex.current = index;
                localStorage.setItem('List', list);
                return [...list];
            });
        }
    };

    const handleDragEnd = (e) => {
        setDragging(false);
        dragIndex.current = null;
        dragComponent.current.removeEventListener('dragend', handleDragEnd);
        dragComponent.current = null;
    };

    const handleMouseEnter = (index) => {
        setBtnDisplay(oldDisplay => {
            let newDisplay = JSON.parse(JSON.stringify(oldDisplay));
            newDisplay.splice(index, 1, 'inline-block');
            localStorage.setItem('Display', JSON.stringify(newDisplay));
            return newDisplay;
        })
    };

    const resetBtnDisplay = () => {
        setBtnDisplay(defaultBtnDisplay);
    };

    const handleBtnEvents = (btn, index) => {
        if (btn === 'edit') {
            setEditBtn(() => {
                let newEditBtn = defaultEditBtn;
                newEditBtn[index] = true;
                localStorage.setItem('editBtn', JSON.stringify(newEditBtn));
                return newEditBtn;
            })
        } else if (btn === 'reorder') {
            dragIndex.current = index;
        } else if (btn === 'quitEdit') {
            setEditBtn(defaultEditBtn);
        } else if (btn === 'duplicate') {
            setList(oldList => {
                let newList = [...oldList.map((el, i, arr) => {
                    if (i <= index) return el;
                    else return arr[i - 1];
                }), oldList[oldList.length - 1]];
                localStorage.setItem('List', newList);
                return [...newList];
            });
            // setBtnDisplay([...defaultBtnDisplay, 'none']);
            // setEditBtn([...defaultEditBtn, false]);
        } else if (btn === 'delete') {
            setList(oldList => {
                let newList = [...oldList.map((el, i, arr) => {
                    if (i < index) return el;
                    else return arr[i + 1];
                })];
                newList.pop();
                localStorage.setItem('List', newList);
                return [...newList];
            });
        }
        setBtnDisplay(defaultBtnDisplay);
    };

    return (
        <Fragment>
            <Container fluid>
                <Stack gap={3}>
                    {list.map(({ section: Section, sectionProps, id }, index) => (
                        <Container fluid draggable
                            key={`${index}`}
                            className={styles.container}
                            onDragStart={(e) => { handleDragStart(e, index) }}
                            onDragEnter={dragging ? handleDragEnter : null}
                            onDragLeave={dragging ? (e) => { handleDragLeave(e, index) } : null}
                            onMouseEnter={() => { handleMouseEnter(index) }}
                            onMouseLeave={resetBtnDisplay}
                        >
                            <Col>
                                <EditButtons
                                    index={index}
                                    onBtnEvents={handleBtnEvents}
                                    display={btnDisplay[index]}
                                />
                                <Section
                                    {...sectionProps}
                                    index={index}
                                    onCloseSection={handleBtnEvents}
                                    editing={editBtn[index]}
                                />
                            </Col>
                        </Container>
                    ))}
                </Stack>
            </Container>
        </Fragment >
    );
}

export default Canvas;