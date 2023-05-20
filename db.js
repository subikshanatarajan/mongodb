const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

let database;

async function getDatabase(){
    const client = await MongoClient.connect('mongodb+srv://admin:admin123@cluster0.yvcn6kq.mongodb.net/users?retryWrites=true&w=majority');
    database = client.db('library');

    if (!database) {
            console.log('Database not connected');
    }

    return database;
}

module.exports = {
    getDatabase,
    ObjectID
}