import { ViewStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  totalPageTextStyle: TextStyle;
  currentPageTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  currentPageTextStyle: {
    top: 8,
    fontSize: 25,
    marginRight: 8,
    color: "#fdfdfd",
  },
  totalPageTextStyle: {
    top: 8,
    fontSize: 15,
    marginRight: 24,
    color: "#fdfdfd",
    fontStyle: "italic",
  },
});
