import { StyleSheet, Text, TextInput, View ,Button, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

export default function ToAddItem({submitHandler}) {
  const [text,setText] = useState('');

  const onChangeHandler = (val) =>{
    setText(val);
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style = {styles.input}
      placeholder='more todos..'
      onChangeText={onChangeHandler}/>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => submitHandler(text) }>
        <Text style={styles.text}>ADD TODO</Text>
      </TouchableOpacity>
      {/* <Button style={styles.buttonStyle} onPress={() => submitHandler(text) } color="coral" title="ADD TODO"
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
    },
    input:{
        marginBottom:10,
        padding:5,
        paddingHorizontal:5,
        paddingVertical:5,
        borderWidth:1,
        borderColor:'purple'
    },
    buttonStyle:{
      padding:10,
      backgroundColor:'#f5f5f5',
      borderRadius:10,
    },
    text:{
      textShadowOffset :{width:2,height:2},
      textShadowRadius:2,
      color:'#333',
      fontWeight:'bold',
      textAlign:'center'

    }
})