import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <div className="Home">
      <div className="Home__Left">
        <div className="Home__Left__Content">
          <div className="Home__Left__Content__Heading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="Home__Left__Content__Para">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </div>
          <div className="Home__Left__Content__Buttons">
            <div className="Home__Left__Content__Buttons__Button-AppStore"></div>
            <div className="Home__Left__Content__Buttons__Button-GooglePlayStore"></div>
          </div>
        </div>
      </div>
      <div
        className={`Home__Right ${
          clicked === 0 ? "BackgroundImage1" : "BackgroundImage2"
        }`}
      >
        <div className="Home__Right__Content">
          <div className="Home__Right__Content__Heading">Type Text</div>
          <div className="Home__Right__Content__Para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="Home__Right__Content__SlideButtons">
            <div
              className={`Home__Right__Content__SlideButtons__Button ${
                clicked === 0 ? "clicked" : ""
              }`}
              onClick={() => {
                setClicked(0);
              }}
            ></div>
            <div
              className={`Home__Right__Content__SlideButtons__Button ${
                clicked === 1 ? "clicked" : ""
              }`}
              onClick={() => {
                setClicked(1);
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
