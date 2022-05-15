import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('orders');

    const { pid } = req.query
    const order = await col.findOne({ "_id": ObjectId(pid) });
    res.json(order)
}