import * as React from "react";
import { Text, View, TextStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./PageCounter.style";

interface IProps {
  index: number;
  length: number;
  totalPageTextStyle?: TextStyle;
  currentPageTextStyle?: TextStyle;
}

const PageCounter = (props: IProps) => {
  const { index, length, totalPageTextStyle, currentPageTextStyle } = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.currentPageTextStyle, currentPageTextStyle]}>
        {index + 1}
      </Text>
      <Text style={[styles.totalPageTextStyle, totalPageTextStyle]}>
        / {length}
      </Text>
    </View>
  );
};

PageCounter.defaultProps = {
  index: 1,
  length: 2,
};

export default PageCounter;
