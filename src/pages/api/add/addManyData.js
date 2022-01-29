import clientPromise from '../../../lib/mongodb';

//inset one item
export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("items");


    // Construct a document                                                                                                                                                              
    let itemDocument = [{
        "id": 14,
        "brand": "Prada",
        "name": "Black High Heels",
        "price": "300",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
        "imgUrl": "https://picsum.photos/id/005/400/550"

    },
    {
        "id": 15,
        "brand": "Gucci",
        "name": "White Sneakers",
        "price": "10000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
        "imgUrl": "https://picsum.photos/id/005/400/550"

    }]

    console.log('this is runned');

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertMany(itemDocument);
    // Find one document
    const myDoc = await col.find();
    // Print to the console
    res.send(myDoc)
}