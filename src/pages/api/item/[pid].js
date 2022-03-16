// import { connectToDatabase } from "../../util/mongodb";

// export default async (req, res) => {
//     const { db } = await connectToDatabase();
//     const movies = await db
//         .collection("movies")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(20)
//         .toArray();
//     res.json(movies);
// };


import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection("items");
    console.log('col', col)
    const { pid } = req.query;

    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
        const item = await col.findOne({ "id": pid });

        //capitalise item name
        item.name = item.name.split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        res.json(item)
    }
}


