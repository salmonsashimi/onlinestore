import clientPromise from '../../lib/mongodb';
import { findUser } from './user'


export default async function (req, res) {
    const client = await clientPromise;

    const db = client.db('online-store');
    const col = await db
        .collection("items")
        .find()
        .toArray();

    res.json(col)


}