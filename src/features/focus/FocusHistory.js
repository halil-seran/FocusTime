import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.historyItem(item.status)}>
            {item.subject}
        </Text>
    );
};

const FocusedHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear();
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, marginTop: -120 }}>
                {!!focusHistory.length && (
                    <>
                        <View style={styles.upperTextContainer}>
                            <Text style={styles.title}>
                                Things we have focused on
                            </Text>
                            <FlatList
                                style={{ flex: 1 }}
                                contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                                data={focusHistory}
                                renderItem={HistoryItem}
                                keyExtractor={(item, index) => index.toString()} //VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor. hatasi icin
                            />
                        </View>
                        <View style={styles.cleanContainer} >
                            <RoundedButton size={78} title='Clear' onPress={() => onClear()} />
                        </View>
                    </>
                )}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.lg
    }),
    upperTextContainer: {
        alignItems: 'center',
        flex: 1,
        paddingTop:40

    },
    title: {
        color: 'white',
        fontSize: fontSizes.lg
    },
    cleanContainer: {
        padding: spacing.lg,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    }
});

export default FocusedHistory;