// rsf to generate component.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Mobile App dev',
};

//rnss
const styles = StyleSheet.create({
  header: {
    padding: 14,
  },
  headerText: {
    textAlign: 'center',
    color: colors.textHomeHeader,
    fontSize: 30,
  },
});

export default Header;
