const contactRepository = require("../repositories/contactRepository")
const { validationResult } = require('express-validator')

module.exports.getAlls= async (req,res)=>{
    const [contacts, error] = await contactRepository.getAlls()
    if(error){
        return res.send(error.message)
    }
    res.render('index', {contacts})
}

module.exports.createContact= async (req,res)=>{
    const errors= validationResult(req)
    if( !errors.isEmpty() ){
        const valores = req.body
        const validaciones = errors.array()
        return res.render("index", { validaciones: validaciones, valores: valores } )
    }
    const [response, error]= await contactRepository.create(req.body)
    if(error){
        return res.send(error.message)
    }
    return res.redirect('/contacts')
}

module.exports.deleteOne= async (req,res)=>{
    const [response, error] = await contactRepository.deleteById(req.params.id)
    if(error){
        return res.send(error.message)
    }
    return res.redirect('/contacts')
}

module.exports.edit= async (req,res)=>{
    const [ response, error] = await contactRepository.editById(req.params.id)
    console.log(response," <=========== el obj de editByID")
    if(error){
        return res.send(error.message)
    }
    return res.render("index", response)
}

module.exports.updateOne= async (req,res)=>{
    const errors= validationResult(req)
    if( !errors.isEmpty() ){
        const valores = req.body
        const validaciones = errors.array()
        return res.render("index", { validaciones: validaciones, valores: valores } )
    }
    const [response, error] = await contactRepository.updateById(req.params.id, req.body)
    if(error){
        return res.send(error.message)
    }
    console.log(response," <----- debe ser /contacts")
    return res.redirect(response)
}