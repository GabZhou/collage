import { Fragment } from "react";
import EmailCard from "./EmailCard";
import Stack from 'react-bootstrap/Stack';

const EmailBody = props => {
    return (
        <Fragment>
            <Stack gap={3}>
                <Stack direction="horizontal" gap={3}>
                    <EmailCard job={props.jobs[0]}></EmailCard>
                    <EmailCard job={props.jobs[1]}></EmailCard>
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <EmailCard job={props.jobs[2]} ></EmailCard>
                    <EmailCard job={props.jobs[3]} ></EmailCard>
                </Stack>
            </Stack>
        </Fragment>
    );
}

export default EmailBody;