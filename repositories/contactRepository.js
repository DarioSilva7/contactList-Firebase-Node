const {db} = require('../src/firebase')

module.exports.getAlls= async ()=>{
    try{
        const querySnapshot = await db.collection('contacts').get() 
        //querySnapshot -> hace referencia a los datos que tiene al momento de consultar.
        const contacts= querySnapshot.docs.map(e=>({
            id: e.id,
            // firstName: e.firstname,
            // lastName: e.lastname,
            // birthday: e.birthday,
            // phone: e.phone
            ...e.data()
        }))
        return [contacts, null]
    }
    catch(e){
        return [null, e] 
    }
}

module.exports.updateById= async(id, data)=>{
        try{
            const {id} = req.params
            await db.collection('contacts').doc(id).update(data)
            return ['Contacto actualizado',null]
        }
        catch(e){
            return [null, e]
        }
}

module.exports.deleteById= async (id)=>{
    try{
        await db.collection('contacts').doc(id).delete()
        return ["Contacto eliminado",null]
    }
    catch(e){
        return [null, e]
    }
}

module.exports.create= async (req, res)=>{
    try{
        const {firstname, lastname, phone, birthday, email}= req.body
        await db.collection('contacts').add({
            firstname, 
            lastname, 
            phone, 
            birthday,
            email
        })
        return ["Contacto creado", null]
        }
        catch(e){
            return [null, e]
        }
}