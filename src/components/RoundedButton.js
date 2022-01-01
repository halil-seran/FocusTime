import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress} >
      {props.title === "＋" || props.title === "❌" ?
      <Text style={[styles(size).textplus, textStyle]}>{props.title}</Text>
      :
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      }
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor:'white',
      borderWidth:2,
      justifyContent: 'center'
    },
    textplus:{
      color: 'white',
      fontSize: size * 0.7
    },
    text: {
      color: 'white',
      fontSize: size * 0.3
    }
  });
