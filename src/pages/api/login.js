import clientPromise from '../../lib/mongodb';

export default async function (req, res) {
    const client = await clientPromise;
    const db = client.db('online-store')
    const col = db.collection('users')


    if (req.method === 'POST') {
        const { email, password } = req.body
        // const email = "bennytan@example.com"
        // const password = 'n3920nf0q9n230fnq20n9';
        const user = await col.findOne({ "email": email })
        console.log('user', user);

        //check if user exists
        if (!user) {
            console.log('null user')
            return res.status(500).json({ error: 'User not found' })
        }

        //verify user password
        if (user.password === password) {
            // return res.json(user)
            return res.send({ token: 'test123' })
        } else {
            return res.json('null')
        }
    }
}