import React, { Component } from "react";
import { connect } from "react-redux";

interface IProps {
    isAuthenticated: boolean;
    history: any;
}

export default function withAuth(ComponentToBeRendered) {
    class Authenticate extends Component<IProps> {
        componentDidMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push("/dashboard");
            }
        }

        render() {
            return <ComponentToBeRendered {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.currentUser.isAuthenticated,
        };
    }

    return connect(mapStateToProps)(Authenticate);
}
