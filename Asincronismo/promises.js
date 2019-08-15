const API_URL = "https://swapi.co/api/";
const PEPLE_URL = "people/:id";

const searchUrl = `${API_URL}${PEPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };

const obtenerPersonaje = id => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEPLE_URL.replace(":id", id)}`;
    $.get(url, options, data => {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
};

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then(personaje => {
    console.log(`El personaje 1 es ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then(personaje => {
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then(personaje => {
    console.log(`El personaje 3 es ${personaje.name}`);
    return obtenerPersonaje(4);
  })
  .then(personaje => {
    console.log(`El personaje 4 es ${personaje.name}`);
  })
  .catch(onError);
