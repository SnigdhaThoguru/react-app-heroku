import React, { Component } from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            emailaddress: "", 
            password: "", 
            formErrors: {
                username: "", 
                emailaddress: "", 
                password: ""
            }, 
            usernameValid: false, 
            emailaddressValid: false, 
            passwordValid: false, 
            formValid: false
        }
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value}, 
            () => {this.validateField(name, value)})
    }

    validateField(fieldName, fieldValue) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let emailaddressValid = this.state.emailaddressValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case "username": 
                usernameValid = fieldValue.match(/^[A-Za-z0-9.]{4,9}$/);
                fieldValidationErrors.username = usernameValid ? "" : " is invalid!";
                break;

            case "emailaddress": 
                emailaddressValid = fieldValue.match(/^[a-zA-Z0-9_.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
                fieldValidationErrors.emailaddress = emailaddressValid ? "" : " is invalid!";
                break;

            case "password": 
                passwordValid = fieldValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/);
                fieldValidationErrors.password = passwordValid ? "" : " is invalid!";
                break; 

            default: 
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors, 
            usernameValid: usernameValid, 
            emailaddressValid: emailaddressValid, 
            passwordValid: passwordValid
        }, this.validateForm)
    }

    validateForm() {
        this.setState({
            formValid: this.state.usernameValid && this.state.emailaddressValid && this.state.passwordValid
        })
    }

    render() {
        return(
        <div className="container wrapper">
            { /* header */ }
            <Header />

            { /* main container */ }
            <div className="row">
                { /* left panel */}
                <LeftPanel /> 

                { /* center panel */ }
                { /* <Container /> */ }
                <div className="col-sm-6">
                    <div className="contentCenter">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Form Validation</h1>

                                <form>
                                    <fieldset className="form-group">
                                        <div className="row">
                                            <label for="username" className="col-sm-5 text-right"> username </label>
                                            <div className="col-sm-7">
                                                <input type="text" name="username" value={this.state.username} className="form-control" placeholder="enter username" onChange={this.handleUserInput} required />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <div className="row">
                                            <label for="emailaddress" className="col-sm-5 text-right"> emailaddress </label>
                                            <div className="col-sm-7">
                                                <input type="text" name="emailaddress" value={this.state.emailaddress} className="form-control" placeholder="enter emailaddress"  onChange={this.handleUserInput} required />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <div className="row">
                                            <label for="password" className="col-sm-5 text-right"> password </label>
                                            <div className="col-sm-7">
                                                <input type="text" name="password" value={this.state.password} className="form-control" placeholder="enter password" onChange={this.handleUserInput} required />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <div className="row">
                                            <label for="" className="col-sm-5 text-right"> </label>
                                            <div className="col-sm-7">
                                                <button type="submit" className="btn btn-primary">submit</button>
                                            </div>
                                        </div>
                                    </fieldset>

                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>

                { /* rightpanel */}
                <RightPanel />
            </div>

            { /* footer */ }
            <Footer />
        </div>
        );
    }
}

export default FormValidation;