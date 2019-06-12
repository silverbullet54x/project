const db = require('../config/db');
const schema = db.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    sex:{
        type:Number,
        default:1
    },
    age:{
        type:Number,
        default:12
    }
})
module.exports = db.model('user',schema);