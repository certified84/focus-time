import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import CountDown from '../components/CountDown';

const Timer = (props) => { 
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown minutes={2} isPaused={false} onProgress={() => {}} onEnd={() => {}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    countDown: {
        backgroundColor: colors.white,
    },
})

export default Timer;