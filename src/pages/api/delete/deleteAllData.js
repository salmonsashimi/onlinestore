import clientPromise from '../../../lib/mongodb';

//inset one item
export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("items");

    const deleteData = await col.remove({});

    console.log(deleteData)
    console.log('all data deleted');

}