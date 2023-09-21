import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'coral',
        height:80,
        paddingTop:38,

    },
    header:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        textShadowOffset:{width:2,height:2},
    }
})