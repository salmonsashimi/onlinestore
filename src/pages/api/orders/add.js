import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    console.log('add page')

    const { token, cart } = req.body
    console.log(token)
    console.log(cart);

    // Construct a document                                                                                                                                                              
    let orderDocument = {
        "userId": token,
        "orders": cart
    }

    console.log('orderdocument', orderDocument);

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(orderDocument);
    // Find one document
    const myDoc = await col.find();
    // Print to the console

}