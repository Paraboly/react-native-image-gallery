import React from "react";
import { StatusBar } from "react-native";
import ImageGallery from "@paraboly/react-native-image-gallery";

const staticImages = [
  {
    uri:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
    caption: "@seefromthesky",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
    caption: "@yaaniu",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
    caption: "@sebaspenalambarri",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1009&q=80",
    caption: "@sotti",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
    caption: "@saiph",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1540280369237-dea08361593a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    caption: "@sidhra",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1523632117739-12cc7fa95ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=545&q=80",
    caption: "@sotti",
  },
];

const backButtonImage = require("./assets/left-chevron.png");
const backButtonImageAlt = require("./assets/back-alt.png");

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageGallery
        initialPage={4}
        images={staticImages}
        backButtonImageSource={backButtonImage}
      />
    </>
  );
};

export default App;
