import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('cart');

    // const cartItem = {
    //     userId,
    //     cartItems
    // }

    const currentCart = req.body;
    console.log(currentCart)


    //check if previous cart exists
    const prevCart = await col.findOne({ _id: 1 });

    if (prevCart) {
        console.log('previous cart exists', prevCart)
    } else {
        console.log('previous cart does not exist')
    }

}