import clientPromise from '../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('users');
    if (req.method === 'POST') {

        const { name, email, password, contactPref } = req.body

        let userDocument = {
            name,
            email,
            password,
            contactPref,
        }
        console.log(userDocument)

        const user = await col.findOne({ email })

        //check if user exists
        if (user) {
            return res.status(404).json({ error: 'Email has already been registered with NAVY. Please use another email.' })
        }

        const newUser = await col.insertOne(userDocument);
        return res.send({ token: newUser.insertedId })
    }
}
