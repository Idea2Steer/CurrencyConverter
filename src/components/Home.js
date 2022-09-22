import React from "react";
import NavBar from "./Navbar/NavBar";
import ConversionForm from "./ConversionForm/ConversionForm";
import backgroundImage from "../assets/images/background.jpg";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="container-fluid currency">
        <div className="row px-0 position-relative">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 col-md-6 bg_color_EBB767 position-relative currency_display">
            <div className="currency_left"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-0 currency_display">
            <img src={backgroundImage} alt="" className="w-100" />
          </div>
          <div className="col-12 px-0 currency_display_mobile">
            <img src={backgroundImage} alt="" className="w-100" />
          </div>
          <div className="col-12 bg_color_EBB767 currency_bg_left currency_display_mobile">
            <div className="currency_left"></div>
          </div>
          <ConversionForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
