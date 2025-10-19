import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';

export default function SearchAndAdd() {
  const [list, setList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredList = list.filter(item =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAdd = () => {
    if (newPhrase.trim() && !list.some(item => item.phrase === newPhrase.trim())) {
      const newItem = {
        id: Date.now(),
        phrase: newPhrase.trim(),
        count: 0
      };
      setList([...list, newItem]);
      setNewPhrase('');
    }
  };

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

  const removeItem = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.title}>Search & Add Tasbih</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Search phrases..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <View style={styles.addContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      {filteredList.map(item => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.phrase}>{item.phrase}</Text>
          <View style={styles.counterContainer}>
            <Button title="-" onPress={() => decrementCount(item.id)} />
            <Text style={styles.count}>{item.count}</Text>
            <Button title="+" onPress={() => incrementCount(item.id)} />
            <Button title="❌" onPress={() => removeItem(item.id)} />
          </View>
        </View>
      ))}
    </View>
  );
}