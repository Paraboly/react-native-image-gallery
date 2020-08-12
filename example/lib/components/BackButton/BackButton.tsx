import React from "react";
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BackButton.style";

interface IProps {
  ImageComponent: any;
  backImageSource: any;
  backButtonStyle: ViewStyle;
  backButtonImageStyle: ImageStyle;
  onBackButtonPress: () => void;
}

const BackButton = (props: IProps) => {
  const {
    ImageComponent,
    backImageSource,
    backButtonStyle,
    onBackButtonPress,
    backButtonImageStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.backButtonStyle, backButtonStyle]}
      onPress={onBackButtonPress}
    >
      <ImageComponent
        style={[styles.imageStyle, backButtonImageStyle]}
        source={backImageSource}
      />
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  ImageComponent: Image,
};

export default BackButton;
