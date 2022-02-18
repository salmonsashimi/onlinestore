import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const data = await (await fetch(`http://localhost:3000/api/retrieveItems`)).json()

    res.json(data)


    //retrieve search query
    const { pid } = req.query;
    // console.log(pid);

}