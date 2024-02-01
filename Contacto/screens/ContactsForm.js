import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveContactRest, updateContactRest,deleteContactRest } from "../rest_client/contactos";


export const ContactsForm = ({ navigation, route }) => {
  let contactRetrieved = route.params.contactParam
  let isNew = true;

  if (contactRetrieved != null) {
    isNew = false;
  }
  if (!isNew) {

  }



  const [name, setName] = useState(isNew ? null : contactRetrieved.nombre);
  const [surname, setSurname] = useState(isNew ? null : contactRetrieved.apellido);
  const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrieved.celular);

  console.log(route.params.contactParam)
  const showMessage = (messsage) => {
    Alert.alert("CONFIRMACION",messsage);
    navigation.goBack();
  };

  const createContact = () => {
    console.log("Saving contact");
    saveContactRest(
      {
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
      },
      showMessage
    );
  };

  const updateContact = () => {
    console.log("Update contact");
    updateContactRest({
      id: contactRetrieved.id,
      name: name,
      surname: surname,
      phoneNumber: phoneNumber,
    },
      showMessage
    );
  }

  const confirmDelete = () => {
    Alert.alert(
      "CONFIRMACION",
      "¿Está seguro de que desea eliminar?",
      [
        {
          text: "SI",
          onPress: deleteContac 
        },
        {
          text: "CANCELAR"
        },
      ]
    );
  };
  
  const deleteContac =()=>{
    deleteContactRest({
      id:contactRetrieved.id
    },showMessage)
    }
  return (
    <View style={styles.container}>
      <Input
        value={name}
        placeholder="NOMBRE"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <Input
        value={surname}
        placeholder="APELLIDO"
        onChangeText={(value) => {
          setSurname(value);
        }}
      />
      <Input
        value={phoneNumber}
        placeholder="TELEFONO"
        onChangeText={(value) => {
          setPhoneNumber(value);
        }}
      />
      {
        isNew ? <View></View> : <Button title="ELIMINAR" onPress={confirmDelete} />

      }
      <Button title="GUARDAR" onPress={isNew ? createContact : updateContact} />

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
