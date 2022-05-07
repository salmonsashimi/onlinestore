import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    console.log('add page')

    const { token, cart } = req.body
    console.log(token)
    console.log(cart);

}