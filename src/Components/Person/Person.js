import React, { Component } from "react";
import '../../App.css';
import './Person.css';

class Person extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h1 className="personTitle">Table</h1>
                <table>
                    <tr>
                        <th>Items</th>
                        <th>Status</th>
                        <th>Month</th>
                        <th>Sales</th>
                    </tr>
                    <tr>
                        <td>Iphone X</td>
                        <td>Pending</td>
                        <td>January</td>
                        <td>$50,000.00</td>
                    </tr>
                    <tr>
                        <td>Samsung J10</td>
                        <td>Arrived</td>
                        <td>February</td>
                        <td>$120,000.00</td>
                    </tr>
                    <tr>
                        <td>Realme 5i</td>
                        <td>Arrived</td>
                        <td>March</td>
                        <td>$25,000.00</td>
                    </tr>
                    <tr>
                        <td>Samsung Galaxy A20</td>
                        <td>On Way</td>
                        <td>April</td>
                        <td>$90,000.00</td>
                    </tr>
                    <tr>
                        <td>Xiaomi Redmi Note 8 Pro</td>
                        <td>Arrived</td>
                        <td>November</td>
                        <td>$25,000.00</td>
                    </tr>
                    <tr>
                        <td>Oppo A1k</td>
                        <td>Return</td>
                        <td>December</td>
                        <td>$35,000.00</td>
                    </tr>
                </table>
            </div>
        )

        // return React.createElement(
        //     "div",
        //     null,
        //     React.createElement("table", null,
        //         React.createElement("tr", null,
        //             React.createElement("th", null, "Items"),
        //             React.createElement("th", null, "Status"),
        //             React.createElement("th", null, "Month"),
        //             React.createElement("th", null, "Sales")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Iphone X"),
        //             React.createElement("td", null, "Pending"),
        //             React.createElement("td", null, "January"),
        //             React.createElement("td", null, "$50,000.00")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Samsung J10"),
        //             React.createElement("td", null, "Arrived"),
        //             React.createElement("td", null, "February"),
        //             React.createElement("td", null, "$120,000.00")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Realme 5i"),
        //             React.createElement("td", null, "Arrived"),
        //             React.createElement("td", null, "March"),
        //             React.createElement("td", null, "$250,000.00")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Samsung Galaxy A20"),
        //             React.createElement("td", null, "On Way"),
        //             React.createElement("td", null, "April"),
        //             React.createElement("td", null, "$90,000.00")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Xiaomi Redmi Note 8 Pro"),
        //             React.createElement("td", null, "Arrived"),
        //             React.createElement("td", null, "November"),
        //             React.createElement("td", null, "$25,000.00")),

        //         React.createElement("tr", null,
        //             React.createElement("td", null, "Oppo A1k"),
        //             React.createElement("td", null, "Return"),
        //             React.createElement("td", null, "November"),
        //             React.createElement("td", null, "$21,000.00")),
        //     )
        // )
    }
}

export default Person;