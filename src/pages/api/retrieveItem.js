import clientPromise from '../../lib/mongodb';
import { findUser } from './user'


export default async () => {
    const client = await clientPromise;
    const user = await findUser();



    const db = client.db('online-store');
    const itemCol = db.collection("items");


    // Construct a document            


    let itemDocument = {
        "id": 1,
        "user": user,
        "name": "Denim Jacket",
        "brand": "Adidas",
        "price": 2340.21,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
        "imgUrl": "https://picsum.photos/id/240/400/550"
    }



    // Insert a single document, wait for promise so we can read it back
    const p = await itemCol.insertOne(itemDocument);








}