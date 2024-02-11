let mongoose=require('mongoose')
let validator= require('validator')

let Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        validate(value){
            if (!validator.isEmail) {
                console.log('email is not validate');                
            }

        }
    },
    message:String
})

let collection= new mongoose.model('collection',Schema)

module.exports= collection