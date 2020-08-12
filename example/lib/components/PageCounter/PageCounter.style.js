import fonts from "fonts";
import colors from "colors";

export default {
  container: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  currentPageTextStyle: {
    top: 8,
    fontSize: 25,
    marginRight: 8,
    color: colors.text.white,
    fontFamily: fonts.montserrat.semiBoldItalic
  },
  totalPageTextStyle: {
    top: 8,
    fontSize: 15,
    marginRight: 24,
    fontStyle: "italic",
    color: colors.text.white,
    fontFamily: fonts.montserrat.regular
  }
};
