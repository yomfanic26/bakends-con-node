const IP = "192.168.100.8";
const PUERTO = "3002";
const URL = "http://" + IP + ":" + PUERTO + "/";

export const getAllLaptops = (fnRefreshList) => {
  fetch(URL + "laptos")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnRefreshList(body);
    });
};

export const saveLaptopRest = (laptop, fnShowMessage) => {
  const confg = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      marca: laptop.brand,
      procesador: laptop.processor,
      memoria: laptop.memory,
      disco: laptop.disk,
    }),
  };

  fetch(URL + "laptos", confg)
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      fnShowMessage();
      console.log({ body });
    });
};
