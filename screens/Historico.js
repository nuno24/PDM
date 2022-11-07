import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, Button, ScrollView, View, ImageBackground} from 'react-native';
import Hist from './Hist';

function Historico() {

    return(
        <ScrollView>
            {Hist.historico}
        </ScrollView>
    )
}


  export default Historico;