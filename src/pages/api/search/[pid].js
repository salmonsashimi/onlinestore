// import clientPromise from '../../../lib/mongodb';

export default async function (req, res) {
    const data = await (await fetch(`http://localhost:3000/api/retrieveItems`)).json()

    // console.log('data', data);

    //retrieve search query
    const { pid } = req.query;
    console.log(pid);

    const results = data.filter(item => {
        return item.name.includes(pid) || item.brand.includes(pid)
    })

    // console.log('results', results)

    res.json(results)


}