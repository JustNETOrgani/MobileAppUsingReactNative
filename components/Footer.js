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
    height: 60,
    width: 400,
    padding: 15,
    backgroundColor: colors.footerBackground,
  },
  footerText: {
    color: colors.textFooter,
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Footer;
