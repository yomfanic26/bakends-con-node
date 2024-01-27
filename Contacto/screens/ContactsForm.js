import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveContactRest, updateContactRest } from "../rest_client/contactos";


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
  const showMessage = () => {
    Alert.alert("CONFIRMACION", isNew?"Se creo el Contacto":"Se actualizo el contacto");
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
      <Button title="GUARDAR" onPress={isNew?createContact:updateContact} />
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
