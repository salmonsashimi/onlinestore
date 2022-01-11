import { addUser, findUser } from './api/user';
import retrieveItem from './api/retrieveItem';

export default function Movies({ movies }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>

        </div>
    );
}


export async function getServerSideProps(context) {
    try {
        retrieveItem();
        // const user = retrieveUser()
        // client.db() will be the default database passed in the MONGODB_URI
        // You can change the database by calling the client.db() function and specifying a database like:
        // const db = client.db();
        // Then you can execute queries against your database like so:

        // const client = await clientPromise;
        // const db = client.db('online-store');


        // const col = db.collection("users");
        // // Construct a document                                                                                                                                                              
        // let personDocument = {
        //     "id": 2,
        //     "name": "Jimmy Teo",
        //     "email": "jimmyteo@example.com",
        //     "password": "n3290n90a23n0n32"
        // }
        // // Insert a single document, wait for promise so we can read it back
        // const p = await col.insertOne(personDocument);
        // // Find one document
        // const myDoc = await col.findOne();
        // // Print to the console
        // console.log(myDoc);


        // const movies = await db.collection('users').find({}).limit(20).toArray();

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




            // // <ul>
            //     // {movies.map((movie) => (
            //         <li>
            //         <h2>{movie.name}</h2>
            //         <h3>{movie.metacritic}</h3>
            //     </li>
            // ))}
            // </ul>