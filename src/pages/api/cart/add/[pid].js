import clientPromise from '../../../../lib/mongodb';

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    const orderInfo = req.body;
    console.log(orderInfo)


    // Construct a document                                                                                                                                                              
    let orderDocument = {
        "userId": 1,
        "orders": {
        }
    }

    console.log('data added');

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(orderDocument);
    // Find one document
    const myDoc = await col.find();
    // Print to the console

}