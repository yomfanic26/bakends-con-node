const IP = "192.168.100.8";
const PUERTO = "3001";
const URL = "http://" + IP + ":" + PUERTO + "/";

export const getAllContacts = (fnRefreshList) => {
  fetch(URL + "contactos")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};

export const saveContactRest = (contact, fnShowMessage) => {
  const confg = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: contact.name,
      apellido: contact.surname,
      celular: contact.phoneNumber,
    }),
  };

  fetch(URL + "contactos", confg)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnShowMessage();
      console.log({ body });
    });
};
