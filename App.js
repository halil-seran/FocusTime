import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>i have a subject</Text>
      ) : (
        <Focus/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#92B6B1'
  },
});
