const mongodb = require('mongodb');
const client = mongodb.MongoClient;

const uri = "mongodb://127.0.0.1:27017/"
const db = client.connect(uri , (err , client) => {
    if(err) console.log(err);
    else console.log("connected");
    const db = client.db('Mflix');
    // db.createCollection("newcollection" , (error , result) => {
    //     if(error) console.log(error);
    //     else console.log(result.collectionName + "created");
    // })
    db.collection("newcollection" , (error , result) => {
        result.insertOne({ "name" : "jay" , "surname" : "avaiya" } , (error) => {
            if(error) console.log(error);
            db.collection("newcollection").find({} , (error , result) => {
                if(error) console.log(error);
                result.forEach(element => {
                    console.log(element)
                });
                client.close();
            })
        })
    })
})