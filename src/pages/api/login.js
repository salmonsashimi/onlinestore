import clientPromise from '../../lib/mongodb';

export default async function (req, res) {
    if (req.method === 'POST') {
        // const { email, password } = req.body
        const email = "bennytan@example.com"
        const client = await clientPromise;
        const db = client.db('online-store')
        const col = db.collection('users')
        console.log('user col', col)

        const user = await col.findOne({ "email": email })
        console.log('user', user);

        if (!user) {
            console.log('null user')
        }
    }

}