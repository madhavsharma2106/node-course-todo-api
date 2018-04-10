const MongoCient = require('mongodb').MongoClient;

MongoCient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log("unable to connect to MongoDB Server");
    }    
    console.log("Connected to MongoDB Server");

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log("Unable to insert Todo");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // }) 

    db.collection('Users').insertOne({
        name: 'Madhav',
        age: 25,
        location: 'India'
    }, (err, result)=>{
        if(err){
            return console.log("Unable to connect to Users");
        }

        console.log(JSON.stringify(result.ops, undefined,2));
        
    });
    
    client.close();
});