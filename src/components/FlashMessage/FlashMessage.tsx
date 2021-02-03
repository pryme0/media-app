import React, { useState } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Cancel } from "@material-ui/icons";
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

    const handleClose = (flashMessage: FlashMessageShape) => {
        onFlashMessageClick(flashMessage);
        setOpen(false);
    };

    const renderMessage = (message: FlashMessageShape) => {
        return (
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                key={message.id}
                onClose={() => handleClose(message)}
                message={message.text}
                autoHideDuration={10000}
            >
                <Alert
                    severity={message.type === "ERROR" ? "error" : "success"}
                    variant="filled"
                    action={
                        <IconButton color="inherit" size="small">
                            <Cancel />
                        </IconButton>
                    }
                >
                    {message.text}
                </Alert>
            </Snackbar>
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
