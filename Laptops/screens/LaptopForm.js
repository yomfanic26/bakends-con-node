import { View, Text, StyleSheet, Alert } from "react-native";
import { Input } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest } from "../rest_laptop/laptops";
import { Button, Icon } from "@rneui/themed";

export const LaptopsForm = ({ navigation }) => {
  const [brand, setBrand] = useState();
  const [processor, setProcessor] = useState();
  const [memory, setMemory] = useState();
  const [disk, setDisk] = useState();

  const showMessage = () => {
    Alert.alert("CONFIRMATION", "Laptop added successfully");
  };

  const saveLaptops = () => {
    console.log("Saving Laptop");
    navigation.goBack();
    saveLaptopRest(
      {
        brand: brand,
        processor: processor,
        memory: memory,
        disk: disk,
      },
      showMessage
    );
  };

  return (
    <View style={styles.container}>
      <Input
        value={brand}
        placeholder="MARCA"
        onChangeText={(value) => {
          setBrand(value);
        }}
      />
      <Input
        value={processor}
        placeholder="PROCESADOR"
        onChangeText={(value) => {
          setProcessor(value);
        }}
      />
      <Input
        value={memory}
        placeholder="MEMORIA"
        onChangeText={(value) => {
          setMemory(value);
        }}
      />
      <Input
        value={disk}
        placeholder="DISCO"
        onChangeText={(value) => {
          setDisk(value);
        }}
      />
      <Button onPress={saveLaptops} radius={"sm"}>
        GUARDAR
        <Icon name="save" color="white" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
