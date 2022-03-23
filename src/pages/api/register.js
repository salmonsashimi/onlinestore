import clientPromise from '../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store');
    const col = db.collection('users');
    if (req.method === 'POST') {

        const { name, email, password } = req.body

        let userDocument = {
            name,
            email,
            password
        }
        console.log(userDocument)

        const user = await col.findOne({ email })

        //check if user exists
        if (user) {
            console.log('email already exists user')
            return res.status(404).send({ error: 'Email already exists' })
        }

        const p = await col.insertOne(userDocument);
        return res.send({ token: 'test123' })
    }
}
