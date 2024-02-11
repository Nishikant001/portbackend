let express = require('express')
let router=express.Router()
let All=require('./controller')
const Connect = require('../database/db')

router.route('/').get(All.home)
router.route('/contact').post(All.contact)


module.exports= router