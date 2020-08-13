import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import ImageSwiper from "@freakycoder/react-native-image-swiper";
/**
 * ? Local Imports
 */
import styles from "./ImageGallery.style";
import BackButton from "./components/BackButton/BackButton";
import PageCounter from "./components/PageCounter/PageCounter";

interface IProps {
  Container: any;
}

interface IState {
  images: IImage[];
  index: number;
  initialPage: number;
}

export interface IDimensions {
  width: number | string;
  height: number | string;
}

export interface IImage {
  uri: string;
  caption?: string;
  dimensions?: IDimensions;
}

class ImageGallery extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      index: props.index,
      initialPage: props.initialPage,
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
        <BackButton {...this.props} />
        <PageCounter index={index} length={images.length} {...this.props} />
      </SafeAreaView>
    );
  };

  renderImageSwiper = () => {
    const { images } = this.state;

    return (
      <ImageSwiper
        images={images}
        onPageSelected={(newIndex) => this.setState({ index: newIndex })}
        {...this.props}
      />
    );
  };

  render() {
    const { Container = View } = this.props;
    return (
      <Container style={styles.container} {...this.props}>
        {this.renderImageSwiper()}
        {this.renderHeader()}
        {this.renderCaption()}
      </Container>
    );
  }
}

export default ImageGallery;
