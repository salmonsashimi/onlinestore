import clientPromise from '../../lib/mongodb';

const getDatabase = async () => {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("users");

    return col;
}


const addUser = async () => {
    const col = getDatabase();

    // Construct a document                                                                                                                                                              
    let personDocument = {
        "id": 4,
        "name": "Kimmy Tay",
        "email": "kimmytay@example.com",
        "password": "qj2309f0q2n3f02n398qn"
    }

    // Insert a single document, wait for promise so we can read it back
    const newUserPromise = await col.insertOne(personDocument);

    return newUserPromise;
}


const findUser = async () => {
    const col = getDatabase();

    const user = await col.findOne({ "id": 1 });

    return user;

}

export { addUser, findUser }