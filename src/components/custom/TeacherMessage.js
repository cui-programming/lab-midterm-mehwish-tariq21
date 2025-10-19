import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.teacherContainer}>
      <Text style={styles.teacherTitle}>Teacher's Message:</Text>
      <Text style={styles.messageText}>
        Good luck for your lab mid! Practice well and do your best.
      </Text>
    </View>
  );
}