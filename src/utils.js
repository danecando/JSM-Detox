import prices from './data/prices';

export function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function calculatePrice(size, toppings) {
  const sizePrice = prices[size];
  const toppingsPrice = toppings.reduce(acc => acc + prices.topping, 0);
  return sizePrice + toppingsPrice;
}

export function createDate() {
  const now = new Date();
  return `${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`;
}
