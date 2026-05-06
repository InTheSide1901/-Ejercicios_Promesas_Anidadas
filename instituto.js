require('colors')

let alumno = {
    Nombre: "Diego",
    Edad: 25,
    inscriptoAMaterias: ["Matematicas", "Electronica", "Programación"],
    debeCorrelativas: false
}

function validarCorrelativa(objAlumno) {
    console.log("Validando correlativas....")

        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (!objAlumno.debeCorrelativas) {
                resolve("Bien, no debe correlativas, anotando materia...".yellow)
            }
            else {
                reject("El alumno debe correlativas, no puede anotarse!".red)
            }
            }, 2000)
        })
}
function inscribirMateria(objAlumno, materia) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                objAlumno.inscriptoAMaterias.push(materia);
                resolve(`El alumno ya esta inscripto correctamente! Las nuevas materias son: ${objAlumno.inscriptoAMaterias}`.green)
            }, 5000);
        })
}
function insribirAlumno(objAlumno, materia){
    validarCorrelativa(objAlumno)
        .then((resolve) => {
            console.log(resolve)
            return inscribirMateria(objAlumno, materia)
        })
        .then((resolve) => {
            console.log(resolve)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("operación finalizada!")
        })
    }

insribirAlumno(alumno, "quimica")


