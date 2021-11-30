import React, { Component } from "react";

class HeaderTodo extends Component {
    componentDidUpdate(prevProps, prevState) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let bgColor = "rgb(" + red + " , " + green + " , " + blue + ")";

        if(prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = " You clicked on List Item Part! ";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        const headerStyle = {
            padding: "10px 0px",
            lineHeight: "1em"
        }
        return(
            <header style={headerStyle}>
                <h1> Todos Container Concept <span id="inH1"></span> </h1>

                <p>Pre-writing questions: Before starting any given page, you really need to wrap your heads around the primary goal of the page and to whom this page is targeted. What’s their pain? What’s in it for them? Where are they in their buying process? And what keywords or phrases would they most likely use to search for your solution? The best writers are those who can put themselves in the buyer’s shoes and write as if they are having a one-on-one conversation with that buyer.</p>
            </header>
        );
    }
}

export default HeaderTodo;