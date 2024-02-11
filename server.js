require('dotenv').config()

let express = require('express')
let app=express()
let port=process.env.PORT || 5000
let router=require('./express/router')
let Connect=require('./database/db')
let cors=require('cors')
app.use(cors())

app.use(express.json())

app.use('/api/portfolio',router)



Connect().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at prot ${port}`)
    })
    
})
