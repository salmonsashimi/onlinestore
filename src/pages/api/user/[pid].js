import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function (req, res) {

    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("users");
    const { pid } = req.query;

    const user = await col.findOne({ "_id": ObjectId(pid) });
    res.json(user)
}

// const getDatabase = async () => {
//     const client = await clientPromise;
//     const db = client.db('online-store');
//     const col = db.collection("users");

//     return col;
// }


// const addUser = async () => {
//     const col = await getDatabase();

//     // Construct a document                                                                                                                                                              
//     let personDocument = {
//         "id": 2,
//         "name": "Jonathan Walker",
//         "email": "johnnywalker@example.com",
//         "password": "n043qnegr0v340wern0v93nw409gnv90wn3"
//     }

//     // Insert a single document, wait for promise so we can read it back
//     const newUserPromise = await col.insertOne(personDocument);

//     return newUserPromise;
// }


// const findUser = async () => {
//     const col = await getDatabase();

//     const user = await col.findOne({ "id": 1 });

//     return user;
// }

// export { addUser, findUser }