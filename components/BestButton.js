import React from 'react';
import { useState } from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BestButton = (prop) => {
const {texto, onPresser} = prop;

const navigation = useNavigation();


  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPresser}>
        <Text style={styles.button_text}>{texto}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    height: 80,
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    fontSize: 30,
  },
  button_text: {
    fontSize: 35,
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
  }}
);

export default BestButton;
