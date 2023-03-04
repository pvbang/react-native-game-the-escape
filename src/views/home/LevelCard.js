import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const LevelCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default LevelCard;
