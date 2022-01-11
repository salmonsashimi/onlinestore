import clientPromise from '../../lib/mongodb';


export default async () => {
    const client = await clientPromise;
    const db = client.db('online-store');


    const userCol = db.collection("users");
    const userID = await userCol.findOne({ "id": 1 });

    const itemCol = db.collections("items");

    // Construct a document            
    for (let i = 0; i < 3; i++) {
        let itemDocument = {
            "id": i,
            "user": userID,
            "name": "Brand New Sneakers",
            "brand": "NIKE",
            "price": 1000,
            "description": "lorem"
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(itemDocument);

    }


}