import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);


export const Countdown = ({ minutes = 20, isPaused, onProgress, onEnd }) => {
    const interval = React.useRef(null);
    const [millis, setMillis] = useState(null);
    const countDown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMillis(minutes));
            return timeLeft;
        });
    };

    useEffect(() => {
        setMillis(minutesToMillis(minutes));
    }, [minutes]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => clearInterval(interval.current);
    }, [isPaused]);

    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;
    return (
        <Text style={styles.text}>
            {formatTime(minute)} : {formatTime(seconds)}
        </Text>
    );
};


const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: 'black',
        padding: spacing.lg,
        backgroundColor: '#E8DDB5',
        borderRadius: 30
    }
});