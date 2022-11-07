import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HistX = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.background}>
        <Text style = {styles.txt}>X É Vencedor</Text>
      </View>
    </View>
  )
}

export default HistX;

const styles = StyleSheet.create({
  container:{
      height:90,
      width:400,
      borderColor:'#000000',
      borderWidth:3,
      borderRadius:5,
      alignSelf:'center',
      marginVertical:5,
      justifyContent:'center',
      paddingVertical: 5
  },
  txt:{
      fontSize:37,
      fontWeight:'bold',
      color:'black',
      alignSelf: 'center'
  },
  background:{
    backgroundColor: '#f2ef2c',
    height: 85,
    width: 394,
    justifyContent:'center'
  }
})