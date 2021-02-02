import React from "react";
import { Container, Row, Col } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import socket from "../../services/socket";
import OAuth from "./OAuth";
import "./styles/ConnectSocialStep2.scss";
import { FixMeLater } from "../../types";

const providers = [
    {
        name: "facebook",
        classNames: "facebook",
        style: { padding: "10px 12.6rem" },
        text: "Facebook Page",
        icon: faFacebook,
    },
    {
        name: "twitter",
        classNames: "twitter",
        style: { padding: "10px 13rem" },
        text: "Twitter Profile",
        icon: faTwitter,
    },
    {
        name: "instagram",
        classNames: "instagram instagram-ico",
        style: { padding: "10px 12.6rem" },
        text: "Instagram Page",
        icon: faInstagram,
    },
    {
        name: "linkedin",
        classNames: "linkedin",
        style: { padding: "10px 13rem" },
        text: "LinkedIn Page",
        icon: faLinkedin,
    },
];

const ConnectSocialStep2 = (props: FixMeLater) => {
    return (
        <>
            <Container maxWidth="md" className="social-connect-container">
                <Row className="social-connect-row">
                    <div className="social-wrapper">
                        <Col className="social-connect-heading">
                            <h2 className="social-connect-text">
                                You are almost there!
                            </h2>
                            <p className="social-connect-paragraph">
                                To begin using Buzzroom, just attach a social
                                profile
                            </p>
                            <div className="connect-social-button-wrapper">
                                {providers.map(
                                    ({
                                        name,
                                        classNames,
                                        style,
                                        text,
                                        icon,
                                    }) => (
                                        <OAuth
                                            socket={socket}
                                            provider={name}
                                            key={name}
                                            route="/link"
                                            history={props.history}
                                        >
                                            <Button
                                                className={`social-${classNames}`}
                                                style={style}
                                            >
                                                <FontAwesomeIcon
                                                    icon={icon}
                                                    className="social-icons"
                                                ></FontAwesomeIcon>
                                                {text}
                                            </Button>
                                        </OAuth>
                                    )
                                )}
                            </div>
                        </Col>
                        <Row className="steps">
                            <Col className="step-col-1">
                                <div className="step-1">
                                    <h1 className="steps">Step 2/3</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ConnectSocialStep2;
