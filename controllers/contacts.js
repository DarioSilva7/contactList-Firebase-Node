const { getAlls, deleteById, create } = require("../repositories/contactRepository")

module.exports.getAlls= async (req,res)=>{
    const [response, error] = await getAlls()
    if(error){
        return res.send(error.message)
    }
    return res.send(response)
}

module.exports.updateOne= async (req,res)=>{
    const [response, error] = await updateById(req.params.id, req.body)
    if(error){
        return res.send(error.message)
    }
    return res.send(response)
}

module.exports.deleteOne= async (req,res)=>{
    const [response, error] = await deleteById(req.params.id)
    if(error){
        return res.send(error.message)
    }
    return res.send(response)
}

module.exports.createContact= async (req,res)=>{
    const [response, error]= await create(req.body)
    if(error){
        return res.send(error.message)
    }
    return res.send(response)
    
} 