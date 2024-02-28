import rect, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

export default function App() {
  const [people , setPeople] = useState([
    {name : "Himindu" , id : 1},
    {name : "Shenali" , id : 2},
    {name : "Dimuthu" , id : 3},
    {name : "Kumari" , id : 4},
    {name : "Daya" , id : 5}
    
  ])

  const pressHandler = (id) => {
    console.log("the id is "+ id);
  }
  return (
    <View style={styles.maindividion}>
      <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
       data = {people}
       renderItem={({item}) =>(
        <TouchableOpacity
          onPress={() => pressHandler(item.id)}
        > 
        <View style = {styles.personCard} >
            <Text style = {styles.id} >{item.id}:  </Text>
            <Text style = {styles.name}>{item.name}</Text>

       </View>
       </TouchableOpacity>
       )}


    />








      {/* <ScrollView >
      {
        people.map( (person) => {
          return (
              <View style = {styles.personCard} >
                <Text style = {styles.id}>{person.id}</Text>
                <Text style = {styles.name}>{person.name}</Text>

              </View>
          );
          
        }
        )
      }
      </ScrollView> */}
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
    overflow: "scrollY",
    backgroundColor: "lightgreen",
    paddingTop : 100,
  },
  
  personCard: {
    display : "flex",
    flexDirection : "row",
    width : 150,
    height : 100,
    backgroundColor: "green",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal : 10,
    borderRadius: 10,


  },
  name : {
    fontSize : 20,
    
    color: "white",
  },
  id: {
    fontSize : 20,
    color: "white",
  }


});
