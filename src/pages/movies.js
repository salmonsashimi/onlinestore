import clientPromise from '../lib/mongodb';

export default function Movies({ movies }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            {console.log(movies)}

        </div>
    );
}

// export async function getServerSideProps() {
//     const { db } = await connectToDatabase();

//     const movies = await db
//         .collection("movies")
//         .find({})
//         .sort({ metacritic: -1 })
//         .limit(20)
//         .toArray();

//     return {
//         props: {
//             movies: JSON.parse(JSON.stringify(movies)),
//         },
//     };
// }

export async function getServerSideProps(context) {
    try {
        // client.db() will be the default database passed in the MONGODB_URI
        // You can change the database by calling the client.db() function and specifying a database like:
        // const db = client.db();
        // Then you can execute queries against your database like so:

        const client = await clientPromise;
        const db = client.db('sample_mflix');
        const movies = await db.collection('users').find({}).toArray();
        // console.log(movies)
        return {
            props: {
                movies: JSON.parse(JSON.stringify(movies)),
            }
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false },
        }
    }
}



// <ul>
// {movies.map((movie) => (
//     <li>
//         <h2>{movie.title}</h2>
//         <h3>{movie.metacritic}</h3>
//         <p>{movie.plot}</p>
//     </li>
// ))}
// </ul>