import * as React from "react";
import { TouchableOpacity, Image, ViewStyle, ImageStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BackButton.style";

interface IProps {
  ImageComponent?: any;
  backButtonImageSource?: any;
  backButtonStyle?: ViewStyle;
  backButtonImageStyle?: ImageStyle;
  onBackButtonPress?: () => void;
}

const BackButton = (props: IProps) => {
  const {
    ImageComponent,
    backButtonStyle,
    onBackButtonPress,
    backButtonImageStyle,
    backButtonImageSource,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.backButtonStyle, backButtonStyle]}
      onPress={onBackButtonPress}
    >
      <ImageComponent
        style={[styles.imageStyle, backButtonImageStyle]}
        source={backButtonImageSource}
      />
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  ImageComponent: Image,
};

export default BackButton;
