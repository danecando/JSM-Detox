import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import sizes from '../data/sizes';

const MenuButton = ({ size, isSelected, onPress }) => {
  const buttonStyles = [styles.button];
  const buttonTextStyles = [styles.buttonText];
  if (isSelected) {
    buttonStyles.push(styles.selected);
    buttonTextStyles.push(styles.selected);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={buttonTextStyles}>{size}</Text>
    </TouchableOpacity>
  );
};

export const SizeMenu = ({ selectedSize = 'medium', handleChange }) => (
  <View style={styles.container}>
    {sizes.map(size => (
      <View style={styles.buttonContainer} key={size}>
        <MenuButton
          size={size}
          isSelected={selectedSize === size}
          onPress={() => handleChange(size)}
        />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#333',
    fontWeight: '500',
  },
  buttonContainer: {
    marginRight: 18,
  },
  selected: {
    backgroundColor: 'red',
    color: 'white',
  },
});
