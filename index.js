


require('dotenv').config()
// importar f(x)
const fx = require('./datb')






const comando = process.argv[2];


switch (comando) {
    case 'nuevo' :
        const rut = process.argv[3]
        const nombre = process.argv[4]
        const curso = process.argv[5]
        const nivel = process.argv[6]
        fx.agregar_estudiante(rut, nombre, curso,nivel);
        break
    case 'consulta':
        fx.obtener_estudiantes()
        break
    case 'rut':
        const rut1 = process.argv[3]
        fx.e_por_rut(rut1)
        break
    case 'editar':
        const rut2 = process.argv[3]
        const nombre2 = process.argv[4]
        const curso2 = process.argv[5]
        const nivel2 = process.argv[6]
        fx.actualizar_estudiante(rut2, nombre2, curso2, nivel2)
        break
    case 'eliminar':
        const rut3 = process.argv[3]
        fx.eliminar_estudiante(rut3)
        break

    default:
        console.log('Comando no reconocido');
        break
  }




  //export



