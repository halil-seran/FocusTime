import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";
import { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({ focusSubject }) => {
    useKeepAwake();
    
    const [minutes, setMinutes] = useState(0.1);
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress)
    };
    const changeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <ProgressBar
                progress={progress}
                color={'#B9314F'}
                style={{ height: 15, marginTop: 20 }}
            />
            <View style={styles.buttonContainer}>
                <Timing onChangeTime={changeTime} />
            </View>
            <View style={styles.buttonContainer}>
                {!isStarted ?
                    <RoundedButton title="start" onPress={() => setIsStarted(true)} />
                    :
                    <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        paddingTop: 15
    },
    title: {
        color: colors.secondry,
        textAlign: 'center'
    },
    task: {
        color: colors.secondry,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonContainer: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});