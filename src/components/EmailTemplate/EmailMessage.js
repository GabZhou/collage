import { Fragment, useState } from "react";
import TextEditor from "../EmailEditing/TextEditor";
import DOMPurify from 'dompurify';

const EmailMessage = props => {
    const defaultMessage = `<p>There are 30+ new jobs for you!</p>`;

    const [messageHtml, setMessageHtml] = useState(defaultMessage);

    const handleEditedMessage = (editedMessage) => {
        setMessageHtml(editedMessage);
        props.onCloseSection('quitEdit', props.index);
    };

    const handleCancelEdit = () => {
        props.onCloseSection('quitEdit', props.index);
    };

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };

    return (
        <Fragment>
            {props.editing &&
                <TextEditor
                    messageHtml={messageHtml}
                    onDisplayEdited={handleEditedMessage}
                    onCancelEdit={handleCancelEdit}
                />}
            {!props.editing &&
                <div dangerouslySetInnerHTML={createMarkup(messageHtml)} />}
        </Fragment >
    );
}

export default EmailMessage;