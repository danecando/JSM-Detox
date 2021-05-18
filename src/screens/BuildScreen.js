import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { BannerImage } from '../components/BannerImage';
import { Pill } from '../components/Pill';
import { Button } from '../components/Button';
import { SizeMenu } from '../components/SizeMenu';
import { calculatePrice } from '../utils';
import toppings from '../data/toppings';
import { useOrders } from '../context/orders';

const removeItem = (list, item) => list.filter(x => x !== item);

export const BuildScreen = ({ navigation }) => {
  const [size, setSize] = React.useState('medium');
  const [availableToppings, setAvailableToppings] = React.useState(toppings);
  const [selectedToppings, setSelectedToppings] = React.useState([]);
  const { dispatch } = useOrders();
  const price = calculatePrice(size, selectedToppings);

  const addTopping = topping => {
    setAvailableToppings(removeItem(availableToppings, topping));
    setSelectedToppings([...selectedToppings, topping]);
  };

  const removeTopping = topping => {
    setSelectedToppings(removeItem(selectedToppings, topping));
    setAvailableToppings([...availableToppings, topping]);
  };

  return (
    <SafeAreaView>
      <BannerImage url="https://pbs.twimg.com/profile_banners/1093412383/1619207896/1500x500" />
      <View style={styles.section}>
        <Text style={styles.heading}>Available toppings:</Text>
        <View style={styles.row} testID="available-toppings">
          {availableToppings.map((topping, idx) => (
            <TouchableOpacity
              key={`${topping}_${idx}`}
              style={styles.pillButton}
              onPress={() => addTopping(topping)}
              testID="available-topping">
              <Pill text={topping} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Selected Toppings</Text>
        <View style={styles.row} testID="selected-toppings">
          {selectedToppings.map((topping, idx) => (
            <TouchableOpacity
              key={`${topping}_${idx}`}
              style={styles.pillButton}
              onPress={() => removeTopping(topping)}
              testID="selected-topping">
              <Pill text={topping} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <SizeMenu selectedSize={size} handleChange={setSize} />
      </View>
      <View style={StyleSheet.flatten([styles.section, styles.row])}>
        <Text style={StyleSheet.flatten([styles.heading, styles.bigText])}>
          Total:{' '}
        </Text>
        <Text style={styles.bigText} testID="total">
          ${price}
        </Text>
      </View>
      <View style={styles.section}>
        <Button
          buttonStyles={styles.orderButton}
          text="Submit Order"
          testID="submit-order"
          onPress={() => {
            dispatch({
              type: 'add',
              item: {
                name: 'Custom',
                id: 'custom',
                toppings: selectedToppings,
                image:
                  'https://pbs.twimg.com/profile_banners/1093412383/1619207896/1500x500',
              },
              price: `$${price}`,
              size,
            });
            navigation.navigate('Orders');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
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
    marginTop: 12,
    marginBottom: 12,
    padding: 8,
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
  pillButton: {
    marginRight: 4,
    marginBottom: 4,
  },
});
