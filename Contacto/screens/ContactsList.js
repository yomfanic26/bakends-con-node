import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllContacts } from "../rest_client/contactos";
import { useState } from "react";

export const ContactsList = ({ navigation }) => {
  const [contactList, setContactsList] = useState([]);

  const ContactItem = ({ contact }) => {
    return (
      //Permite que la lista sea clicliable
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("ContactsFormNav", { contactParam: contact });
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {contact.nombre} {contact.apellido}{" "}
            </ListItem.Title>
            <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  fnRefreshList = (Contacts) => {
    setContactsList(Contacts);
  };
  return (
    <View style={styles.container}>
      <Text>LISTA DE CONTACTOS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllContacts(fnRefreshList);
        }}
      />
      <FlatList
        data={contactList}
        renderItem={({ item }) => {
          return <ContactItem contact={item} />;
        }}
        keyExtractor={(item) => {
          return item.id
        }}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("ContactsFormNav", {});
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column", //Principal Vertical
    alignItems: "stretch", // secundario
    justifyContent: "flex-start", //JP
  },
});
