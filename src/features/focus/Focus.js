import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({addSubject}) => {
  const [subject, setSubject]=useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onSubmitEditing={({nativeEvent}) => {setSubject(nativeEvent.text)}} />
          <RoundedButton size={60} title="＋" onPress={() => {addSubject(subject)}} />
        </View>
      </View>
    </View>
  );
};
/* NOT: bu + normal artidan farkli gerizekali android normal + yi ustundeki boslukla renderliyo dolayisiyla buttonda tam ortaya gelmiyo internetten + sembolu bulup koydum ＋ +  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.secondry,
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
  },
  inputContainer: {
    marginTop: 18,
    flexDirection: "row",
    //alignItems:'center'
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    marginRight: spacing.md
  }
});
