import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';

export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Name: {name}</Text>
      <Text style={styles.headerText}>Reg No: {regNo}</Text>
    </View>
  );
}