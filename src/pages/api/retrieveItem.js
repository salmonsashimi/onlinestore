import clientPromise from '../../lib/mongodb';
import { findUser } from './user'


export default async () => {
    const client = await clientPromise;
    // const user = await findUser();



    const db = client.db('online-store');
    const col = await db
        .collection("items")
        .find({}, { name: 1, brand: 1 })
        .toArray();


    console.log(col)




    // Insert a single document, wait for promise so we can read it back
    // const p = await itemCol.insertOne(itemDocument);



}