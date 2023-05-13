import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton  } from '../components/RoundedButton';
import { useState } from 'react';
import { spacing, fontSizes } from '../utils/sizes';

export const Focus = ({onPress}) => {
    const [text, setText] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Focus Feature</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput} 
                    label="What would like to focus on?"
                    value={text}
                    onChangeText={setText}
                />
                <View style={styles.buttonContainer}>
                    <RoundedButton title="+" size={50} onPress={() => onPress(text)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'top',
    padding: spacing.lg,
    // backgroundColor: 'brown'
  },
  textInput: {
    flex: .8,
    marginRight: spacing.sm,
  },
  buttonContainer: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
