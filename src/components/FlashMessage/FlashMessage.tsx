import React, { useState } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FixMeLater } from "../../types";

import {
    removeFlashMessage,
    FlashMessage as FlashMessageShape,
} from "redux-flash-messages";

interface Props {
    messages: Array<FlashMessageShape>;
    dispatch: Dispatch;
}

const FlashMessage = (props: Props) => {
    const messages = props.messages;
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const renderMessage = (message: FlashMessageShape) => {
        return (
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                onClick={() => onFlashMessageClick(message)}
                key={message.id}
                onClose={handleClose}
                message={message.text}
            />
        );
    };

    const onFlashMessageClick = (flashMessage: FlashMessageShape) => {
        flashMessage.onClick(flashMessage);

        props.dispatch(removeFlashMessage(flashMessage.id));
    };

    return <div>{messages.map((message) => renderMessage(message))}</div>;
};

const mapStateToProps = (store: FixMeLater) => {
    return {
        messages: store.flashMessage.messages,
    };
};

export default connect(mapStateToProps)(FlashMessage);
