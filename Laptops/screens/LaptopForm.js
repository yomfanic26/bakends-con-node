import { View, Text, StyleSheet, Alert } from "react-native";
import { Input } from "@rneui/base";
import { useState } from "react";
import { saveLaptopRest,updateLaptopRest,deleteLaptoptRest } from "../rest_laptop/laptops";
import { Button, Icon } from "@rneui/themed";

export const LaptopsForm = ({ navigation,route }) => {
  let laptoptRetrieved = route.params.lapotpParam
  let isNew = true;

  if (laptoptRetrieved != null) {
    isNew = false;
  }
  if (!isNew) {

  }

  const [brand, setBrand] = useState(isNew?null:laptoptRetrieved.marca);
  const [processor, setProcessor] = useState(isNew?null:laptoptRetrieved.procesador);
  const [memory, setMemory] = useState(isNew?null:laptoptRetrieved.memoria);
  const [disk, setDisk] = useState(isNew?null:laptoptRetrieved.disco);

  const showMessage = (message) => {
    Alert.alert("CONFIRMATION",message);
    navigation.goBack();
  };

  const saveLaptops = () => {
    console.log("Saving Laptop");
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

  
  const updateLaptops = () => {
    console.log("Update Laptop");
    updateLaptopRest(
      {
        id:laptoptRetrieved.id,
        brand: brand,
        processor: processor,
        memory: memory,
        disk: disk,
      },
      showMessage
    );
  };

  const confirmDelete = () => {
    Alert.alert(
      "CONFIRMACION",
      "¿Está seguro de que desea eliminar?",
      [
        {
          text: "SI",
          onPress: deleteLaptop 
        },
        {
          text: "CANCELAR"
        },
      ]
    );
  };
  
  const deleteLaptop =()=>{
    deleteLaptoptRest({
      id:laptoptRetrieved.id
    },showMessage)
    }

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
       {
        isNew ? <View></View> : <Button title="ELIMINAR" onPress={confirmDelete} />

      }
      <Button onPress={isNew?saveLaptops:updateLaptops} radius={"sm"}>
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
