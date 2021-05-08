import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({
  text,
  buttonStyles = {},
  textStyles = {},
  ...rest
}) => (
  <TouchableOpacity style={[styles.button, buttonStyles]} {...rest}>
    <Text style={[styles.text, textStyles]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
