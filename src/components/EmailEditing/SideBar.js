import { Fragment } from "react";
import { Container, Stack } from 'react-bootstrap';
import Title from "./Title";

const SideBar = props => {

    return (
        <Fragment>
            <Container fluid className="mt-1 p-0">
                <Stack gap={3}>
                    <Title section={props.section} />
                </Stack>
            </Container>
        </Fragment>
    );
};

export default SideBar;