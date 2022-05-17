import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    const { delivery, items, userId } = req.body;
    const itemList = JSON.parse(items);

    let totalPrice = 0;
    for (let item of itemList) {
        totalPrice += item.price;
    }

    if (delivery == 'Express') {
        totalPrice += 50;
    }

    // Construct a document                                                                                                                                                              
    let orderDocument = {
        userId,
        "items": itemList,
        totalPrice,
        delivery
    }

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(orderDocument);
    const orderId = p.insertedId.toString()

    res.redirect(307, `/order/${orderId}`)
}