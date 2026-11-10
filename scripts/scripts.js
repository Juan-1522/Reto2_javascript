const estudiantes = [
    {id: 1, nombre: "Ana", edad: 20},
    {id: 2, nombre: "Juan", edad: 22},
    {id: 3, nombre: "María", edad: 21}
]

const buscarestudiante = new Promise((resolve, reject) => {
    if (estudiantes = 1) {
        resolve()
    if (estudiantes = 2) {
        resolve()
    if (estudiantes = 3) {
        resolve()
    } else {
        reject("No se encontró el id")
    }
}}})
estudiantes
 .then((res) => console.log("OK:", res))
 .catch((error) => console.log("ERROR:", error))