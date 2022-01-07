import { Fragment, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.css';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
import bold from '../../assets/material-outlined-24/bold.png';
import underline from '../../assets/material-outlined-24/underline.png';
import italic from '../../assets/material-outlined-24/italic.png';
import alignLeft from '../../assets//material-outlined-24/alignLeft.png';
import alignCenter from '../../assets//material-outlined-24/alignCenter.png';
import alignRight from '../../assets//material-outlined-24/alignRight.png';
import alignJustify from '../../assets//material-outlined-24/alignJustify.png';
import emoji from '../../assets//material-outlined-24/emoji.png';
import link from '../../assets//material-outlined-24/link.png';
import image from '../../assets//material-outlined-24/image.png';
import color from '../../assets//material-outlined-24/color.png';

const TextEditor = props => {

    const contentFromHtml = htmlToDraft(props.messageHtml);
    const { contentBlocks, entityMap } = contentFromHtml;
    const initialContent = ContentState.createFromBlockArray(contentBlocks, entityMap);

    const [editorState, setEditorState] = useState(EditorState.createWithContent(initialContent));

    const handleUpload = (file) => {
        const uploadedImageUrl = URL.createObjectURL(file);

        return new Promise((resolve) => {
            resolve({
                data: { link: uploadedImageUrl }
            })
        })
    };

    const handleUpdate = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const messageHtml = draftToHtml(rawContentState);
        props.onDisplayEdited(messageHtml);
    };

    const handleCancel = () => {
        props.onCancelEdit();
    }

    return (
        <Fragment>
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class border p-1 rounded"
                toolbarClassName="toolbar-class mb-0 rounded"
                editorClassName="editor-class rounded"
                toolbar={{
                    options: ['blockType', 'textAlign', 'inline', 'colorPicker', 'link', 'emoji', 'image'],
                    blockType: {
                        inDropdown: true,
                        className: 'dropdown-class block-type-class',
                        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']
                    },
                    textAlign: {
                        inDropdown: true,
                        className: 'dropdown-class text-align-class',
                        options: ['left', 'center', 'right', 'justify'],
                        left: { icon: alignLeft },
                        center: { icon: alignCenter },
                        right: { icon: alignRight },
                        justify: { icon: alignJustify }
                    },
                    inline: {
                        inDropdown: false,
                        className: 'inline-class',
                        options: ['bold', 'italic', 'underline'],
                        bold: { icon: bold, className: 'btn-class' },
                        italic: { icon: italic, className: 'btn-class' },
                        underline: { icon: underline, className: 'btn-class' }
                    },
                    colorPicker: {
                        icon: color,
                        className: 'btn-class',
                        popupClassName: 'test',
                        colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                            'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                            'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                            'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                            'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                            'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                    },
                    link: {
                        inDropdown: false,
                        showOpenOptionOnHover: true,
                        defaultTargetOption: '_self',
                        options: ['link'],
                        link: { icon: link, className: 'btn-class' }
                    },
                    emoji: {
                        icon: emoji,
                        className: 'btn-class',
                        emojis: [
                            '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                            '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                            '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                            '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                            '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                            '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                            '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                            '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                            '✅', '❎', '💯',
                        ],
                    },
                    image: {
                        icon: image,
                        className: 'btn-class',
                        urlEnabled: false,
                        uploadEnabled: true,
                        alignmentEnabled: true,
                        uploadCallback: handleUpload,
                        previewImage: true,
                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                        alt: { present: false, mandatory: false },
                        defaultSize: {
                            height: 'auto',
                            width: 'auto',
                        },
                    },
                }}
            />
            <Container className="btns-wrapper-update px-0 pt-1" >
                <ButtonGroup aria-label="Message Update Buttons">
                    <Button className="btn-editor" onClick={handleUpdate}>Update</Button>
                    <Button className="btn-editor" onClick={handleCancel} variant="light">Cancel</Button>
                </ButtonGroup>
            </Container>
        </Fragment>
    );
};

export default TextEditor;