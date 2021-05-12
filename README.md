# React Native E2E Testing with Detox

## Setup

```bash
git clone https://github.com/danecando/JSMarathon.git
cd JSMarathon
yarn
```

### Install pods for iOS development

```bash
cd ios && pod install && cd ..
```

## Running

### Android

```
yarn android
```

### iOS

```
yarn ios
```

## Branches

- `main` - Base demo app without detox or e2e tests
- `tests` - Demo app with working e2e tests

## App overview

We love pizza at This Dot! The demo is an app for our fictional pizza restaurant.

There are two tabs: **Menu and Orders**

The menu tab is a list of the available pizzas to order. You can also build your own pizza using the first button at the top of the screen.

![Menu Screen](./screenshots/menu-screen.png)

### Build your own

On this screen you can add and remove toppings from your pizza, select the size, see the total price, and submit your order.

![Build Screen](./screenshots/build-screen.png)

### Menu item options

After selecting an item from the menu list you will be taken to a screen that lets you pick the size and see the final price before submitting your order.

![Options Screen](./screenshots/options-screen.png)

### Orders

Orders comes with one previously delivered order populated by default. Any pizzas you create or order will be added to your order screen.

![Orders Screen](./screenshots/orders-screen.png)

## E2E Test Cases

We want to write e2e tests to cover these user flows

- [ ] User can navigate to orders to see previous orders
- [ ] User can pick an item from the menu, select a size and options, and place an order
- [ ] User can create their own pizza and order it
