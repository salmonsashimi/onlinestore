import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    const { pid } = req.query
    console.log(pid);

}