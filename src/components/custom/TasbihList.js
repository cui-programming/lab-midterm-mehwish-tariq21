import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar'; // ✅ Correct import

export default function TasbihList() {
  const [list, setList] = useState(initialAzkaar); // ✅ Use azkaar data

  const incrementCount = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setList(updatedList);
  };

  const decrementCount = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
    );
    setList(updatedList);
  };

  return (
    <View style={styles.tasbihContainer}>
      <Text style={styles.title}>Tasbih Counter</Text>
      {list.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.phrase}>{item.phrase}</Text>
          <View style={styles.counterContainer}>
            <Button title="-" onPress={() => decrementCount(item.id)} />
            <Text style={styles.count}>{item.count}</Text>
            <Button title="+" onPress={() => incrementCount(item.id)} />
          </View>
        </View>
      ))}
    </View>
  );
}