import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';


export default function ToDoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333'/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    item:{
        padding:10,
        marginTop:20,
        borderRadius:15,
        backgroundColor:'coral',
        borderColor:'#000',
        marginLeft:10,
        borderWidth:1,
        borderStyle:'dashed',
        flexDirection:'row'
    },
    itemText:{
      marginLeft:5,
    }
})