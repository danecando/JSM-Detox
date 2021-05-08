import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BannerImage } from '../components/BannerImage';
import { SizeMenu } from '../components/SizeMenu';
import { Button } from '../components/Button';
import { calculatePrice } from '../utils';
import { useOrders } from '../context/orders';

export const OptionScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [size, setSize] = React.useState('medium');
  const { dispatch } = useOrders();
  const price = calculatePrice(size, item.toppings);
  return (
    <View>
      <BannerImage url={item.image} style={{ width: 400, height: 100 }} />
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={StyleSheet.flatten([styles.title, styles.section])}>
            {item.type}
          </Text>
          <View style={styles.section}>
            <Text style={styles.heading}>Toppings: </Text>
            <Text style={styles.uppercase}>{item.toppings.join(', ')}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <SizeMenu selectedSize={size} handleChange={setSize} />
        </View>
        <View style={StyleSheet.flatten([styles.section, styles.row])}>
          <Text style={StyleSheet.flatten([styles.heading, styles.bigText])}>
            Total:{' '}
          </Text>
          <Text style={styles.bigText}>${price}</Text>
        </View>
        <View style={styles.section}>
          <Button
            buttonStyles={styles.orderButton}
            text="Submit Order"
            onPress={() => {
              dispatch({ type: 'add', item, size, price: `$${price}` });
              navigation.navigate('Orders');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  center: {
    alignItems: 'center',
  },
  heading: {
    marginBottom: 8,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 24,
  },
  uppercase: {
    textTransform: 'capitalize',
  },
  bigText: {
    fontSize: 24,
  },
  orderButton: {
    backgroundColor: 'red',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
});
