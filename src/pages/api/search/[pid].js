import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {

    const client = await clientPromise;
    const db = client.db('online-store');
    const col = await db
        .collection("items")
        .find({})
        .toArray();

    res.json(col)

    //retrieve search query
    const { pid } = req.query;
    console.log(pid);

}