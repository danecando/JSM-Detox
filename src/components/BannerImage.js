import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const BannerImage = ({ url, style = {} }) => (
  <Image
    style={[styles.banner, style]}
    source={{
      uri: url,
    }}
  />
);

const styles = StyleSheet.create({
  banner: {
    width: 600,
    height: 80,
  },
});
