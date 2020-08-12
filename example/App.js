import React from "react";
import { View, Image, Button, StatusBar, ImageBackground } from "react-native";
import ImageGalleryScreen from "./lib/ImageGallery";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("./assets/ahmed-yaaniu-05A3CzImkhw-unsplash.jpg")}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      ></ImageBackground>
    </>
  );
};

export default App;
