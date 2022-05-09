import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    const { token, cart } = req.body

    // Construct a document                                                                                                                                                              
    let orderDocument = {
        "userId": token,
        "items": cart
    }

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(orderDocument);
    // Find one document
    const myDoc = await col.find();

    res.redirect(307, '/checkout')
}