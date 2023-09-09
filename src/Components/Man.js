import React, { Component } from "react";
import "../App.css";


class Man extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table-wrapper">
                <h1 className="table-spanner" id="table-header">
                    <span>Planets?</span>
                </h1>
                <div className="table" role="table" aria-labelledby="table-header">
                    <div className="thead" role="rowgroup">
                        <div className="tr">
                            <div className="td" role="columnheader">Roman Name</div>
                            <div className="td" role="columnheader">Greek Name</div>
                        </div>
                    </div>
                    <div className="tbody" role="rowgroup">
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Murcury</div>
                            <div data="Greek Name" className="td" role="cell">Hermes</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Venus</div>
                            <div data="Greek Name" className="td" role="cell">Aphrodite</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Tellus</div>
                            <div data="Greek Name" className="td" role="cell">Gaia</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Mars</div>
                            <div data="Greek Name" className="td" role="cell">Ares</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Jupiter</div>
                            <div data="Greek Name" className="td" role="cell">Zeus</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Saturn</div>
                            <div data="Greek Name" className="td" role="cell">Cronus</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Caelus</div>
                            <div data="Greek Name" className="td" role="cell">Uranus</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Neptune</div>
                            <div data="Greek Name" className="td" role="cell">Poseidon</div>
                        </div>
                        <div className="tr" role="row">
                            <div data="Roman Name" className="td" role="cell">Pluto</div>
                            <div data="Greek Name" className="td" role="cell">Hades</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Man;