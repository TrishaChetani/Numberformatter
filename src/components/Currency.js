import React, { Component } from 'react';
import { Format } from "./Format";
class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Insert_amount: 0,
            hidden: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var op = event.target.value;
        this.setState({
            Insert_amount: op
        });
    }

    handleSubmit() {
        const val = Number(this.state.Insert_amount).toFixed(2);
        const result = Format(val, "", "")
        this.setState({
            result
        });
    }
    render() {
        return (
        <div>
            <h1 className="heading-form">Format Currency amount</h1>
            <label className="Insert_amount" htmlFor="Insert_amount" placeholder="Insert_amount">Insert amount
                <span className="required">*</span>
            </label>
            <input type="number" step="0.01" name="Insert_amount" value={this.state.Insert_amount} onChange={this.handleChange} required/>
            <button onClick={this.handleSubmit} type ="submit" className="btn">
                Get Output
            </button>
            <div>{this.state.result}</div>
        </div>

    );
  }
}
export default Currency;
