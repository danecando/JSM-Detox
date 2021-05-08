import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button } from './Button';

export const MenuItem = ({ item, handlePress, children }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>Toppings: {item.toppings.join(', ')}</Text>
      </View>
    </View>
    {children}
    {handlePress && <Button text="Order" onPress={handlePress} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: 'white',
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  imageContainer: {
    marginRight: 8,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});
