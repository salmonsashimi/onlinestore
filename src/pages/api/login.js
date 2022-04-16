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

        //check if user exists
        if (!user) {
            return res.status(404).json({ error: 'User does not exist.' })
        }

        //verify user password
        if (user.password === password) {
            return res.send({ token: user._id })
        } else {
            return res.status(404).json({ error: 'Incorrect password, please try again.' })
        }
    }
}