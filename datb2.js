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
    const query = {
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *',
        values: [ rut,nombre, curso, nivel],
    }
    try {
         const res = await pool.query(query)
       
      console.log('Estudiante agregado:', res.rows[0])
    } catch (e) {
      console.error('Error al agregar estudiante:', e)
    }
  }

//todos los estudiantes
async function obtener_estudiantes() {
    const query = {
        text : 'SELECT * FROM estudiantes'
    }
    
    try {

      const res= await pool.query(query)
      console.log('Estudiantes registrados:', res.rows)

    } catch (e) {
      console.error('Error al obtener los datos:', e)
    }
  }

//estudiante por rut

async function e_por_rut(rut){
    const query =  {
        text: 'SELECT * FROM estudiantes WHERE rut = $1',
        values: [rut],
    }

    try {
        const result = await pool.query(query)
        console.log('Estudiante encontrado :', result.rows)
    } catch (e) {
        console.error('Error al obtener los datos:', e)
    }
    
}


// actualizar estudiante

async function actualizar_estudiante(rut, nombre, curso, nivel) {
    const query = {
        text: 'UPDATE estudiantes SET nombre = $2, curso = $3  , nivel = $4 WHERE rut = $1',
        values: [rut,nombre,curso, nivel],
    }
  
    try {

      await pool.query(query)
      console.log('Estudiante actualizado correctamente.')
    } catch (e) {
      console.error('Error al actualizar estudiante:', e)
    }
  }



// eliminar estudiante


async function eliminar_estudiante(rut) {
    const query = {
        text: 'DELETE FROM estudiantes WHERE rut = $1',
        values: [rut],
    }
  
    try {
      await pool.query(query)
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
