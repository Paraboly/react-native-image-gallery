import React from "react";
import { TouchableOpacity, Image } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./BackButton.style";

interface IProps {
  ImageComponent: any;
  backImageSource: any;
  onBackButtonPress: () => void;
}

const BackButton = (props: IProps) => {
  const { ImageComponent = Image, backImageSource, onBackButtonPress } = props;
  return (
    <TouchableOpacity
      style={styles.headerBackButtonStyle}
      onPress={onBackButtonPress}
    >
      <ImageComponent
        style={{ height: 32, width: 32 }}
        source={backImageSource}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
