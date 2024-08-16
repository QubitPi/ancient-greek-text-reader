import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";
import Header from "./Header";
import DescriptionBox from "./DescriptionBox";
import GreekTextBox from "./GreekTextBox";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <DescriptionBox />
    <AudioPlayer tracks={tracks} />
    <GreekTextBox />
  </React.StrictMode>,
  rootElement
);
