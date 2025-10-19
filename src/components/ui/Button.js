import React from 'react';
import { Pressable, Text } from 'react-native';

export default function Button({ onPress, title, style }) {
  return (
    <Pressable 
      onPress={onPress} 
      style={[{
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
        margin: 5,
      }, style]}
    >
      <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
    </Pressable>
  );
}