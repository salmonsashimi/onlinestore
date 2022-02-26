import clientPromise from '../../../lib/mongodb';

//inset one item
export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("items");

    let color = ['black', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'grey', 'red', 'violet']
    let product = ['shoes', 'socks', 'sneakers', 'sunglasses', 'shorts', 'shirt', 't-shirt', 'pants', 'jeans', 'bandana']
    let brand = ['gucci', 'prada', 'adidas', 'nike', 'converse', 'uniqlo', 'reebok', 'checkers', 'religion', 'timbuk']

    let itemDocument = [];
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            let newItemId = j.toString() + i.toString()
            let newItemBrand = brand[i];
            let newItemName = `${color[i]} ${product[j]}`;
            let newItemUrl = `https://picsum.photos/id/005/400/2${newItemId}`
            let newItem = {
                id: newItemId,
                "brand": newItemBrand,
                "name": newItemName,
                "price": 10 * i,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
                "stock": 10,
                "imgUrl": newItemUrl
            }

            console.log(i, newItem)
            itemDocument.push(newItem)
        }
    }


    console.log(itemDocument)
    console.log(itemDocument.length)
    // Construct a document                                                                                                                                                              
    // let itemDocument = [{
    //     "id": 14,
    //     "brand": "Prada",
    //     "name": "Black High Heels",
    //     "price": "300",
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
    //     "stock": 10,
    //     "imgUrl": "https://picsum.photos/id/005/400/550"

    // },
    // {
    //     "id": 15,
    //     "brand": "Gucci",
    //     "name": "White Sneakers",
    //     "price": "10000",
    //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus luctus accumsan tortor.",
    //     "imgUrl": "https://picsum.photos/id/005/400/550"

    // }]

    console.log('data added');

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertMany(itemDocument);
    // Find one document
    // const myDoc = await col.find();
    // Print to the console
    // res.send(myDoc)
}