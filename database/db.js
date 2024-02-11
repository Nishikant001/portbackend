let mongoose= require('mongoose')
// require('')

// let uri= 'mongodb://localhost:27017/portfolio'
const  URI  = process.env.DB_URI
// require('../')

let Connect= async()=>{
    try {
         await mongoose.connect(URI)
        console.log('database is connected')
    } catch (error) {
        console.log(error)
        
    }

}

module.exports= Connect