import rect , {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name , setName] = useState({firstName : "Himindu" , lastName : "Kularathne"});



  return (
    <View style={styles.maindividion}>
      <Text style = {styles.maintext}> My name is {name.firstName} <Text style = {styles.surname} > {name.lastName}</Text></Text>
      <View style = {styles.buttonContainer} >
        <Button title = "change name" onPress={() => {setName ({firstName : "Dimuthu" , lastName : "Perera"});}}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//in here we  create a style sheet to add styles to the components
const styles = StyleSheet.create({
  maindividion: {
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  
   
    
  },
  maintext: {
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
   
  },
  surname: {
    color: 'red',
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: "black",
    
  }
});


