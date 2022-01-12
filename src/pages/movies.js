
export default function Movies({ data }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
                {data.name}
            </p>

        </div>
    );
}


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/user`)
    const data = await res.json()
    console.log(data)

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
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