import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper'
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import CountDown from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from '../features/Timing'
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_MS,
    1 * ONE_SECOND_MS,
    1 * ONE_SECOND_MS,
    1 * ONE_SECOND_MS,
    1 * ONE_SECOND_MS,
]

export const Timer = ({subject, clearSubject}) => { 
    useKeepAwake()
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minute, setMinute] = useState(.1);

    const onEnd = (reset) => {
        setIsStarted(false)
        setProgress(1)
        alert("Completed")
        Vibration.vibrate(PATTERN) 
        reset()
    }
    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown minutes={minute} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}/>
                
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing</Text>
                    <Text style={styles.task}>{`on ${subject}`}</Text>
                </View>
            </View>

            <View style={{ paddingTop: spacing.sm}}>
                <ProgressBar progress={progress} color={colors.progressBar} style={{ height: 10 }}/>
            </View>

            <View style={styles.content}>
                <View style={styles.buttonWrapper}>
                    <Timing onChangeTime={setMinute}/>
                </View>

                <View style={styles.buttonWrapper}>
                    <RoundedButton title={(!isStarted && "start") || (isStarted && "pause")  } onPress={() => {setIsStarted(!isStarted)}}/>
                </View>

                <View style={styles.clearSubjectWrapper}>
                    <RoundedButton size={50} title='-' onPress={clearSubject}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
    },
    countDown: {
        flex: .4,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    content: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
    },
    buttonWrapper: {
        // flex: .3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        // backgroundColor: 'blue',
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        textAlign: 'center',
    },
    clearSubjectWrapper: {
        paddingTop: 15,
    }
})