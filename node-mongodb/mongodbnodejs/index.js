const mongodb = require('mongodb');
const client = mongodb.MongoClient;

const uri = "mongodb://127.0.0.1:27017/"
const db = client.connect(uri , (err , client) => {
    if(err) console.log(err);
    else console.log("connected");
    const db = client.db('test');
    //     db.createCollection("mycollection" , (error , result) => {
    //     if(error) console.log(error);
    //     else console.log(result.collectionName + "created");
    // })
    // db.collection("newcollection" , (error , result) => {
    //     result.insertOne({ "name" : "jay" , "surname" : "avaiya" } , (error) => {
    //         if(error) console.log(error);
    //         db.collection("newcollection").find({} , (error , result) => {
    //             if(error) console.log(error);
    //             result.forEach(element => {
    //                 console.log(element)
    //             });
    //             client.close();
    //         })
    //     })
    // })
    db.collection("mycollection").find({ "surname" : "avaiya" } , (error , result) => {
        if(error) console.log(error);
        result.forEach(element => {
            console.log(element)
        });
        db.collection("mycollection").updateOne({ "surname" : "avaiya" } , { $set : { "surname" : "jay surname" } } , (error , result) => {
            if(error) console.log(error);
            console.log(result.result.n , "document modified");
            db.collection("mycollection").drop((error , result) => {
                if(error) console.log(error);
                console.log("collection is dropped");
            })
        })
    })
})