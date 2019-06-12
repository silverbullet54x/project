const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/world';
mongoose.connect(url,{useNewUrlParser:true})
    .then(()=>{
        console.log('数据库连接成功');
    })
    .catch(error => {
        console.log(error.message);
        console.log('数据库连接失败');
    })
    module.exports = mongoose;