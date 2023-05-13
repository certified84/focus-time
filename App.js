import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { Timer } from './src/features/Timer';

export default function App() {
  const [text, setText] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!text ? (
        <Focus onPress={it => setText(it)}/>
      ): (
        <Timer 
          subject={text}
          clearSubject={() => {setText(null)}}
          onEnd={() => {}}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 100,
    backgroundColor: colors.darkBlue,
    padding: 8,
  },
});
