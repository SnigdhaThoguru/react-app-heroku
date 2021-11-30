import React, { Component } from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'typeface-roboto';

const styles = {
    container: {
      textAlign: 'center',
      paddingTop: 100
    }
  }
  
  
  const muiTheme = getMuiTheme({
    pallete: {
      accent1Color: deepOrange500
    }
  })
  

class MaterialUI_FV extends Component {

    constructor(props, context) {
        super(props, context);  
        this.state = {
          text: 'Jay is a Film Producer'
        }
      }
  
      onSubmit = event => {  
        event.preventDefault();
  
        const text = this.refs.sample_text.input.value;
  
        // update the property
        this.setState({
          text
        });
  
        alert(`You Entered: ${text}`);
      }
  render() {
    return (
      <div className="container wrapper">
        {/*Header*/}
        <Header />
        <br />
        {/*MainContainer*/}
        <div className="row">
          {/*LeftPanel*/}
          <LeftPanel />
          {/*Container*/}
          {/*<Container */}
          <div className="col-sm-6 ">
            <div className="centertxt">
              <div className="row">
                <div className="col-sm-12">
                  <h1>MaterialUI_FV</h1>
                              <MuiThemeProvider
                                  muiTheme={muiTheme}
                                >
                                  <div style={styles.container}>
                                    <h3>Form Entry</h3>
                                    <form onSubmit={this.onSubmit}>
                                      <TextField
                                        defaultValue={this.state.text}
                                        ref="sample_text"
                                        floatingLabelText='say something instead of nothing'
                                        />
                                        <br />
                                        <RaisedButton type="submit" label="submit" />
                                    </form>
                                  </div>
                                </MuiThemeProvider>
                </div>
              </div>
            </div>
          </div>

          {/*RightPanel*/}
          <RightPanel />
        </div>
        <br />
        {/*Footer*/}
        <Footer />
      </div>
    );
  }
}
export default MaterialUI_FV;


