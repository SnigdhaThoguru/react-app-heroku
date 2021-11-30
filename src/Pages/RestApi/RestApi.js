import React, { Component } from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

class RestApi extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            photos: []
        }
        /*
        this.headers = [
            { key: "albumId", label: "Album ID" }, 
            { key: "id", label: "ID" }, 
            { key: "title", label: "Title" }, 
            { key: "url", label: "Url" }, 
            { key: "thumbnailUrl", label: "Thumbnail Photo" }
        ]
        */
    }
    // fetching
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
            .then(response => {
                return response.json()
            }).then(result => {
                this.setState({
                    photos: result
                })
            })
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
                  <h1>Rest Api</h1>
                  
                  <div className="row mb-3 mr-3">
                                    {this.state.photos.map(function(photo) {
                                        return(
                                            <div className="col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <img src={photo.thumbnailUrl} alt={photo.title} title={photo.title} />
                                                    </div>
                                                    <div className="card-footer">
                                                        <h4>{photo.title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                  
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
export default RestApi;
