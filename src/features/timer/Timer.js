import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { colors } from "../../utils/colors";

export const Timer = ({ focusSubject }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
});