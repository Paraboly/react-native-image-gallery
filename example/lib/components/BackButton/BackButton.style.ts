import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  headerBackButtonStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  headerBackButtonStyle: {
    top: 48,
    left: 24,
    position: "absolute",
    alignSelf: "flex-start",
  },
});
