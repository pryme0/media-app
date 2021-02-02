import React, { Component } from "react";
import { apiCall } from "../../services/api";
import { API_URL } from "../../services/config";
import { connect } from "react-redux";
import Axios from "axios";
import { Action, Dispatch } from "redux";
import { FixMeLater } from "../../types";

interface IProps {
    provider: FixMeLater;
    socket: FixMeLater;
    route: FixMeLater;
    history: FixMeLater;
    setCurrentUser: () => any | void;
    loadSocialAccounts: () => any | void;
    // flash;
}

class OAuth extends Component<IProps, { disabled: boolean }> {
    state = { disabled: false };
    popup: FixMeLater;

    checkPopup() {
        const check = setInterval(() => {
            const { popup } = this;
            if (!popup || popup.closed || popup.closed === undefined) {
                clearInterval(check);
                this.setState({ disabled: false });
            }
        }, 1000);
    }

    openPopup = () => {
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        return window.open(
            "",
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );
    };

    startAuth = () => {
        const {
            provider,
            socket,
            route,
            history,
            setCurrentUser,
            loadSocialAccounts,
        } = this.props;

        socket.on(provider, (res: FixMeLater) => {
            try {
                if (route === "") {
                    if (res.user === null)
                        throw res.data || "Something went wrong!";
                    setCurrentUser(res.user);
                    loadSocialAccounts(res.socialAccounts);
                    history.push("/dashboard");
                    localStorage.setItem("accessToken", res.user.userTokens);
                }
                if (route === "/link") {
                    // const { error, user } = res.LinkAccount;

                    // if (error) throw error || "Something went wrong!";
                    // flash("success", "Account connected sucessfully!");
                    history.push("/dashboard");
                }
            } catch (error) {
                // flash("error", error);
            } finally {
                this.popup.close();
                socket.off(provider);
            }
        });

        if (!this.state.disabled) {
            this.popup = this.openPopup();

            Axios.defaults.headers.Authorization = localStorage.accessToken;
            Axios.get(
                `${API_URL}/api/oauth${route}/${provider}?${provider}SocketId=${socket.id}`
            )
                .then((data) => {
                    this.popup.location = data.data.requestUrl;
                })
                .catch((err) => {});
            this.checkPopup();
            this.setState({ disabled: false });
        }
    };

    render() {
        return (
            <div style={{ cursor: "pointer" }} onClick={this.startAuth}>
                {this.props.children}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
        setCurrentUser: (user: FixMeLater) => dispatch({ type: "AUTH", user }),
        loadSocialAccounts: (socialAccounts: FixMeLater) =>
            dispatch({ type: "LOAD_SOCIAL_ACCOUNTS", socialAccounts }),
    };
}

export default connect(null, mapDispatchToProps)(OAuth);
