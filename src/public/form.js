const getAuth = require('firebase/auth')
const auth = getAuth()

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', e=>{
    e.preventDefault()
    const email= document.querySelector('#signup-email').value
    const password= document.querySelector('#signup-password').value
    console.log(email + password)
    // auth.createUserWithEmailAndPassword(email,password)
    // .then(
    //     userCredential=>{
    //         console.log(userCredential,"sign up!")
    //     }
    // )
})