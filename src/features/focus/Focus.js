import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} />
          <RoundedButton size={60} title="＋"  /> 
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
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  textInput:{
    borderWidth: 1,
    flex:1,
    marginRight:10
  },
  inputContainer: {
    marginTop: 18,
    flexDirection:"row"
  },
});
