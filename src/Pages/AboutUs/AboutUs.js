import React, { Component } from "react";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LeftPanel from "../../Components/LeftPanel/LeftPanel";
import RightPanel from "../../Components/RightPanel/RightPanel";

class AboutUs extends Component {
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
                  <h1>About Us</h1>
                  <p>
                    Book Flights with Yatra.com Purchasing flight tickets and
                    confirming your flight booking is the key aspect of planning
                    a trip. Now whether you are travelling for business or on
                    leisure, you cannot make an itinerary until you have first
                    and foremost booked your flights. Procuring an air ticket is
                    a mandatory first step once your travel plans are confirmed.
                    It feels as though half the job is done the moment you
                    secure confirmed flight ticket booking in your hand. The
                    entire activity of searching air connectivity between two
                    cities, checking the schedule of the flight and zeroing in
                    on one that's most convenient to you can feel like a lot of
                    work especially if you are in a hurry to book your flights.
                    On Yatra, the process of air ticket booking as well as
                    scoring is made quite simple by an extremely user-friendly
                    interface that has some special perks too. We give you
                    enough reasons to book your flight with Yatra, whether
                    domestic or international.
                  </p>
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
export default AboutUs;
