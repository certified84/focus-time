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
            <View style={styles.inputContainer}>
                {/* <Text style={styles.text}>Focus Feature</Text> */}
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
  },
  text: {
    color: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'top',
    padding: spacing.lg,
  },
  textInput: {
    flex: .8,
    marginRight: spacing.sm,
  },
  buttonContainer: {
    flex: .2,
    justifyContent: 'center',
  }
});
