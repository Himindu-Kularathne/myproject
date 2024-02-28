import rect, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState({
    firstName: "Himindu",
    lastName: "Kularathne",
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <View style={styles.maindividion}>
      <Text style={styles.maintext}>
        {" "}
        My name is {name.firstName}{" "}
        <Text style={styles.surname}> {name.lastName}</Text>
      </Text>
      <View style={styles.inputSection}>
        <Text> Enter your first name :</Text>
        <TextInput 
        style = {styles.input}
        placeholder="Shenali"
        onChangeText={(e) => {
          setFirstName(e);
        }}
         />
        </View>
        <View style={styles.inputSection}>
        <Text> Enter your last name :</Text>
        <TextInput 
        style = {styles.input}
        placeholder="Senarathne"
        onChangeText={(e) => {
          setLastName(e);
        }}
         />
        </View>
      
      <View style={styles.buttonContainer}>
        <Button
          
          title="CHANGE NAME"
          onPress={() => {
            
            setName({firstName: firstName, lastName: lastName});
          
            
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//in here we  create a style sheet to add styles to the components
const styles = StyleSheet.create({
  maindividion: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  maintext: {
    color: "blue",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10,
  },
  surname: {
    color: "red",
    fontSize: 30,
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
  inputSection: {
    display : "flex",
    flexDirection : "row",
    marginTop:10,
  },
  


 
});
