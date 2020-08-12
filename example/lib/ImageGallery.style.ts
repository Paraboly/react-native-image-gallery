import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";

interface Style {
  headerContainer: ViewStyle;
  gradientContainer: ViewStyle;
  captionContainer: ViewStyle;
  captionTextStyle: TextStyle;
  errorContainer: ViewStyle;
  errorTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  headerContainer: {
    top: 0,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  gradientContainer: {
    flex: 1,
  },
  captionContainer: {
    bottom: 0,
    height: 65,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  captionTextStyle: {
    fontSize: 15,
    color: "#fdfdfd",
    textAlign: "center",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  errorTextStyle: {
    fontSize: 15,
    color: "#fdfdfd",
    fontStyle: "italic",
  },
});
