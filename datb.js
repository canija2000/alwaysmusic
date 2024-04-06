//funciones para interactuar con la base de datos
const password = process.env.PASSWORD
const { Pool } = require('pg')
const config = {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : password,
    database : 'joaquin',
}

const pool = new Pool(config)


// agregar estudiantes
async function agregar_estudiante(rut, nombre, curso, nivel) {
    try {
     
      const query = 'INSERT INTO estudiantes (rut, nombre, curso, nivel) VALUES ($1, $2, $3, $4)'
      await pool.query(query, [rut, nombre, curso, nivel])
      console.log('Estudiante agregado correctamente.')
    } catch (e) {
      console.error('Error al agregar estudiante:', e)
    } finally {
    
    }
  }

//todos los estudiantes
async function obtener_estudiantes() {
    const query = 'SELECT * FROM estudiantes'
    
    try {
      const result = await pool.query(query)
      console.log('Estudiantes registrados:', result.rows)
    } catch (e) {
      console.error('Error al obtener los datos:', e)
    }
  }

//estudiante por rut

async function e_por_rut(rut){
    const query = 'SELECT * FROM estudiantes WHERE rut = $1'

    try {
        const result = await pool.query(query, [rut])
        console.log('Estudiante encontrado :', result.rows)
    } catch (e) {
        console.error('Error al obtener los datos:', e)
    }
    
}


// actualizar estudiante

async function actualizar_estudiante(rut, nombre, curso, nivel) {
    const query = 'UPDATE estudiantes SET nombre = $2, curso = $3  , nivel = $4 WHERE rut = $1'
  
    try {
      await pool.query(query, [rut,nombre,curso, nivel])
      console.log('Estudiante actualizado correctamente.')
    } catch (e) {
      console.error('Error al actualizar estudiante:', e)
    }
  }



// eliminar estudiante


async function eliminar_estudiante(rut) {
    const query = 'DELETE FROM estudiantes WHERE rut = $1'
  
    try {
      await pool.query(query, [rut])
      console.log('Estudiante eliminado correctamente.')
    } catch (e) {
      console.error('Error al eliminar estudiante:', e)
    }
  }


module.exports = {
    agregar_estudiante,
    obtener_estudiantes,
    e_por_rut,
    actualizar_estudiante,
    eliminar_estudiante
}
