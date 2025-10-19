import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TeacherMessage from './src/components/custom/TeacherMessage';
import TasbihList from './src/components/custom/TasbihList';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <TasbihList />
      <SearchAndAdd />
    </ScrollView>
  );
}