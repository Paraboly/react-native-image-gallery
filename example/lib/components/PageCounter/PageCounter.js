import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./PageCounter.style";

const PageCounter = props => {
  const { index, length } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.currentPageTextStyle}>{index + 1}</Text>
      <Text style={styles.totalPageTextStyle}>/ {length}</Text>
    </View>
  );
};

PageCounter.propTypes = {
  index: PropTypes.number,
  length: PropTypes.number
};

PageCounter.defaultProps = {
  index: 1,
  length: 2
};

export default PageCounter;
