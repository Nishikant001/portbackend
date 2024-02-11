let collection=require('../database/db2')
let home=async(req,res)=>{
    try {
        res.status(200).send('hy this is home')
        
    } catch (error) {
        res.status(400).send(error)
        
    }
    

}

let contact=async(req,res)=>{
    // let resp=req.body
    try {
        let resp=req.body
        await collection.create(resp)
        
        res.status(200).json({"message":'sucessfully message send'})
        
    } catch (error) {
        res.status(400).json(error)
        
    }
    

}

module.exports= {home,contact}