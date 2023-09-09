import React, { Component } from "react";

class Name extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <h2>Candidate {this.props.name} worked in Capgemini {this.props.company} Branch Office</h2>
            </div>
        )
    }
}

export default Name;