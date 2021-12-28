import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from "react-native-paper"; 
import { colors } from "../../utils/colors";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    
    const onProgress = (progress) =>{
        setProgress(progress)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown isPaused={!isStarted} onProgress={onProgress} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
                <ProgressBar 
                progress={progress}
                color={'#B9314F'} 
                style={{height:15, marginTop:20}}
                />
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
    buttonContainer:{
        flex:0.3,
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    }
});