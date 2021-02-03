var db =require('../config/connection').get()
module.exports={
    
    addUser:(user,callback)=>{
        console.log(user);
        db.collection('user').insertOne(product).then((data)=>{
            callback(true)

        })
    }
}