import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import GallerySwiper from "react-native-gallery-swiper";
import LinearGradient from "react-native-linear-gradient";
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";
import BackButton from "./components/BackButton/BackButton";
import PageCounter from "./components/PageCounter/PageCounter";

interface IProps {}

interface IState {
  images: IImage[];
  index: number;
  selectedIndex: number;
}

interface IDimensions {
  width: number | string;
  height: number | string;
}

interface IImage {
  uri: string;
  dimensions?: IDimensions;
}

const defaultDimensions = { width: 1080, height: 1920 };

class ImageGallery extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      images: navigation.getParam("images", []),
      index: navigation.getParam("selectedIndex", 0),
      selectedIndex: navigation.getParam("selectedIndex", 0),
    };
  }

  renderError = () => {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTextStyle}>
          This image cannot be displayed...
        </Text>
        <Text style={styles.errorTextStyle}>... but this is fine :)</Text>
      </View>
    );
  };

  renderCaption = () => {
    const { images, index } = this.state;
    return (
      <SafeAreaView style={styles.captionContainer}>
        <Text style={styles.captionTextStyle}>
          {(images[index] && images[index].caption) || ""}
        </Text>
      </SafeAreaView>
    );
  };

  renderHeader = () => {
    const { index, images } = this.state;
    return (
      <SafeAreaView style={styles.headerContainer}>
        <BackButton />
        <PageCounter index={index} length={images.length} />
      </SafeAreaView>
    );
  };

  renderGallerySwiper = () => {
    const { images, selectedIndex } = this.state;
    const medSizeImages = images.map((image: IImage) => {
      const { uri, dimensions, ...args } = image;
      return {
        source: {
          uri: uri,
          dimensions: dimensions,
          ...args,
        },
      };
    });

    return (
      <GallerySwiper
        images={medSizeImages}
        initialNumToRender={30}
        initialPage={selectedIndex}
        errorComponent={this.renderError}
        onPageSelected={(newIndex) => this.setState({ index: newIndex })}
        {...this.props}
      />
    );
  };

  render() {
    return (
      <LinearGradient
        style={styles.gradientContainer}
        colors={["#2C5364", "#203A43", "#0F2027"]}
      >
        {this.renderGallerySwiper()}
        {this.renderHeader()}
        {this.renderCaption()}
      </LinearGradient>
    );
  }
}

export default ImageGallery;
