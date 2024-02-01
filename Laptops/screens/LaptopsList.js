import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { Button, ListItem, Avatar, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_laptop/laptops";
import { useState,useEffect } from "react";

export const LaptopsList = ({ navigation }) => {
  const [laptopList, setLaptopList] = useState([]);
  useEffect(()=>{
    getAllLaptops(fnRefreshList);

  },[]);

  const LaptopItem = ({ laptop }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("LaptopsFormNav", { lapotpParam: laptop });
        }}
      >
        <ListItem >
          <Avatar
            title={laptop.marca.substring(0, 1)}
            containerStyle={{ backgroundColor: "#6755b9" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title style={styles.titulo}>
              {laptop.marca} {laptop.procesador}{" "}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitulo}>
              RAM: {laptop.memoria} DISCO: {laptop.disco}
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron style={styles.Chevron} />
        </ListItem>
      </TouchableHighlight>
    );
  };

  fnRefreshList = (Laptops) => {
    setLaptopList(Laptops);
  };
  return (
    <View style={styles.container}>
      <Text>LISTA DE Laptops</Text>
   
      <FlatList
        data={laptopList}
        renderItem={({ item }) => {
          return <LaptopItem laptop={item} />;
        }}
        keyExtractor={(item) => {
          return item.marca;
        }}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("LaptopsFormNav");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  }, titulo: {
    fontWeight: "bold"
  }, subtitulo: {
    color: 'purple', fontStyle: "italic"
  }, Chevron: {
    backgroundColor: "purple"
  }
});
