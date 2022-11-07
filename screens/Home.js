import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ToutchableOpacity } from 'react-native';
import BestButton from '../components/BestButton';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const onPressJogo = () => {
    navigation.navigate('Jogo');
  };

  const onPressHistorico = () => {
    navigation.navigate('Historico');
  };

  return (
    <SafeAreaView style={styles.buttons_container}>
      <Text style={styles.text}>Home</Text>
      <BestButton texto="Jogar"  onPresser={onPressJogo}></BestButton>
      <BestButton texto="Historico" onPresser={onPressHistorico}></BestButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  buttons_container: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 115,
    marginBottom: 40,
    fontSize: 50,
    alignSelf: 'center',
  },
  button: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10
  }
});

export default Home;
