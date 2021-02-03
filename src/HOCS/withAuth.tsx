import React, { Component } from "react";
import { connect } from "react-redux";
import { FixMeLater } from "../types";

interface IProps {
    isAuthenticated: boolean;
    history: any;
}

export default function withAuth(ComponentToBeRendered: FixMeLater) {
    class Authenticate extends Component<IProps> {
        componentDidMount() {
            if (this.props.isAuthenticated === false) {
                this.props.history.push("/signin");
            }
        }

        render() {
            return <ComponentToBeRendered {...this.props} />;
        }
    }

    function mapStateToProps(state: FixMeLater) {
        return {
            isAuthenticated: state.auth.isAuthenticated,
        };
    }

    return connect(mapStateToProps)(Authenticate);
}
