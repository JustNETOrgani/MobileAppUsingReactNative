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
    height: 60,
    width: 400,
    padding: 15,
    backgroundColor: colors.headerBackground,
  },
  headerText: {
    color: colors.textHeader,
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
