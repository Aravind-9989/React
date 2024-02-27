import React, { Component } from "react";

class Designation extends Component {
    constructor() {
        super()
        this.state = {
            Employees: [
                {
                    "id": 1,
                    "Name": "Aravind",
                    "Salary": 45000,
                    "designation": "Reactjs"
                },
                {
                    "id": 2,
                    "Name": "Kedarnath",
                    "Salary": 35000,
                    "designation": "Javascript"
                },
                {
                    "id": 3,
                    "Name": "Suryateja",
                    "Salary": 44000,
                    "designation": "Nodejs"
                },
                {
                    "id": 4,
                    "Name": "Sai",
                    "Salary": 65000,
                    "designation": "Angular"
                },
                {
                    "id": 5,
                    "Name": "ajay",
                    "Salary": 40000,
                    "designation": "Angular"
                },
                {
                    "id": 6,
                    "Name": "santosh",
                    "Salary": 49000,
                    "designation": "Angular"
                },
                {
                    "id": 7,
                    "Name": "surya",
                    "Salary": 45000,
                    "designation": "Javascript"
                },
                {
                    "id": 8,
                    "Name": "bhargav",
                    "Salary": 45000,
                    "designation": "Angular"
                },
                {
                    "id": 9,
                    "Name": "jahanavi",
                    "Salary": 45000,
                    "designation": "Reactjs"
                },
                {
                    "id": 10,
                    "Name": "shivani",
                    "Salary": 45000,
                    "designation": "Nodejs"
                },
                {
                    "id": 11,
                    "Name": "sadhiq",
                    "Salary": 45000,
                    "designation": "Javascript"
                },
                {
                    "id": 12,
                    "Name": "Sanavi",
                    "Salary": 45000,
                    "designation": "Nodejs"
                },
                {
                    "id": 13,
                    "Name": "Janu",
                    "Salary": 45000,
                    "designation": "Reactjs"
                },
                {
                    "id": 14,
                    "Name": "varun",
                    "Salary": 45000,
                    "designation": "Javascript"
                },
                {
                    "id": 15,
                    "Name": "sravan",
                    "Salary": 45000,
                    "designation": "Nodejs"
                }
            ],
            displayedEmployees: []
        }
    }
    
    reactFunction = () => {
        let result = this.state.Employees.filter((val) => val.designation === "Reactjs");
        this.setState({
            displayedEmployees: result
        });
    }

    angularFunction = () => {
        let result = this.state.Employees.filter((val) => val.designation === "Angular");
        this.setState({
            displayedEmployees: result
        });
    }

    nodejsFunction = () => {
        let result = this.state.Employees.filter((val) => val.designation === "Nodejs");
        this.setState({
            displayedEmployees: result
        });
    }

    javascriptFunction = () => {
        let result = this.state.Employees.filter((val) => val.designation === "Javascript");
        this.setState({
            displayedEmployees: result
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.javascriptFunction}>Sort Javascript</button><br/><br/>
                <button onClick={this.reactFunction}>Sort Reactjs</button><br/><br/>
                <button onClick={this.nodejsFunction}>Sort Nodejs</button><br/><br/>
                <button onClick={this.angularFunction}>Sort Angular</button><br/><br/>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Salary</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.displayedEmployees.map((eachobject) => (
                            <tr key={eachobject.id}>
                                <td>{eachobject.Name}</td>
                                <td>{eachobject.id}</td>
                                <td>{eachobject.Salary}</td>
                                <td>{eachobject.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Designation;