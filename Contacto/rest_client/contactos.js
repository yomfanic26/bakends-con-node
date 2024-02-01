const IP = "192.168.100.8";
const PUERTO = "3003";
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
      fnShowMessage("Se ha crado el contacto");
      console.log({ body });
    });
};

export const updateContactRest = (contact, fnShowMessage) => {
  const confg = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id:contact.id,
      nombre: contact.name,
      apellido: contact.surname,
      celular: contact.phoneNumber,
    }),
  };
  fetch(URL + "contactos/"+contact.id, confg)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnShowMessage("Se actualizo contacto");
      console.log({ body });
    });
};
  export const deleteContactRest = (contact, fnShowMessage) => {
    const confg = {
      method: "DELETE",
        };
  

  fetch(URL + "contactos/"+contact.id, confg)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnShowMessage("Contacto eliminado");
      console.log({ body });
    });
};