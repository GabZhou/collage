import { Fragment } from "react";

const EmailMessage = props => {
    return (
        <Fragment>

            <p className="mb-1">Your Job Alert for <b>Software Engineer</b></p>
            <p className="mb-0">30+ new jobs in San Fransisco match your preferences.</p>

        </Fragment>
    );
}

export default EmailMessage;