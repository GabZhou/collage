import { Fragment } from "react";
import { Stack, Button } from 'react-bootstrap';

const EmailAction = props => {
    const style = {
        button: {
            borderRadius: 20,
        }
    };
    return (
        <Fragment>
            <Stack direction="horizontal" gap={3}>
                <Button style={style.button} variant="primary">See all jobs</Button>
            </Stack>
        </Fragment>
    );
}

export default EmailAction;