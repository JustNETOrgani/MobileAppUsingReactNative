// rsf to generate component.
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{props.title}</Text>
    </View>
  );
};

Footer.defaultProps = {
  title: 'Mobile App dev',
};

//rnss
const styles = StyleSheet.create({
  footer: {
    padding: 25,
    backgroundColor: colors.footerBackground,
  },
  footerText: {
    color: colors.textFooter,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Footer;
