import { ViewStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  imageStyle: ImageStyle;
  backButtonStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  backButtonStyle: {
    top: 48,
    left: 24,
    position: "absolute",
    alignSelf: "flex-start",
  },
  imageStyle: {
    width: 32,
    height: 32,
  },
});
