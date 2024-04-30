import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView, Button, Image , TextInput} from 'react-native';
import { useState } from 'react';
export default function App() {
  const [text,setText] =useState("")
  function handleChange(e){
    console.log(e)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pop}>{text}</Text>
      <StatusBar style="auto" hidden={true} />
      <View style={styles.uu}>
       <Button title="CLICK HERE">

       </Button>
       <View style={styles.bb}>
       <Image source={require("./assets/download.jpeg")} style={styles.oo}></Image>
       <View style={styles.ee}>
       <Text style={styles.pp}>
        DONT STARE
       </Text>
       <TextInput onChangeText={value => setText(value)} placeholder='ENTER YOUR WORDS' defaultValue={text}></TextInput>
       </View>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  
    fontSize: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bb:{
    borderWidth: 1,
    borderRadius: 10,
  },
  ee:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  pp:{
     color: "red",
     height: 50,
     width: 100,
    
     },
  uu:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  pop:{
    color: "purple",
    fontSize: 70,
    
  },
  oo:{
    width: 300,
    height: 300,
  },
  top:{
      flex:3,
     
     marginBottom:100,
     borderWidth: 1,
     padding: 100,
     backgroundColor: "blue",
  },
  rr:{
    fontSize: 50,
  },
});
