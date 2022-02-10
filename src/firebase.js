require('dotenv').config()
const {initializeApp, applicationDefault}= require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')

initializeApp({ // para poder iniciar
    credential: applicationDefault() // credencial espera los datos de firebase.json (los tengo en las variables de entorno) 
    //applicationDefault -> busca solo la variable GOOGLE_APPLICATION_CREDENTIALS que esta en .env
})
const db= getFirestore()
// db es un obj de conexion

module.exports= {
    db
}