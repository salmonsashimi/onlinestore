import clientPromise from '../../../../lib/mongodb';

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('cart');


    const cartItem = {
        userId,
        cartItems
    }

    const currentCart = req.body;
}