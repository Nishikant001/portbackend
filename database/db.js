let mongoose= require('mongoose')
// require('')

// let uri= 'mongodb://localhost:27017/portfolio'
// const  DB_URL  = process.env.DB_URL
// require('../')

let Connect= async()=>{
    try {
        mongoose.connect(`${process.env.DB_URI}/portfolio`)
        console.log('database is connected')
    } catch (error) {
        console.log(error)
        
    }

}

module.exports= Connect