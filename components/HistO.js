import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HistO = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.background}>
        <Text style = {styles.txt}>O É Vencedor</Text>
      </View>
    </View>
  )
}

export default HistO;

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
    backgroundColor: '#f58e18',
    height: 85,
    width: 394,
    justifyContent:'center'
  }
})