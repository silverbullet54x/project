const bcrypt = require('bcrypt');

// bcrypt.hash('123',10,(err,data)=>{
//     if(err){
//         console.log('加密失败');
//     }else{
//         console.log('加密成功');
//         console.log(data);
//     }
// })
let data =bcrypt.hashSync('456',10);
console.log(data);
// bcrypt.compare('1234','$2b$10$EmTWH/HPd1JwnbFLdRXIH.g/60VplFD4nC.9hjVQ3JK08V7figE/q');
// //校验密码是否真确');
// (err,isOk) => {
//     if(err){
//         console.log('校验失败')
//     }else{
//         if(isOk){
//             console.log('密码匹配');
//         }else{
//             console.log('密码不匹配')
//         }
//     }
// }
let isOk= bcrypt.compareSync('458','$2b$10$vsUFZAOLM88lqp4aWEN.i.wb6R45azQMHG6QuOWh19nXBIBW/jxO6');
console.log(isOk);