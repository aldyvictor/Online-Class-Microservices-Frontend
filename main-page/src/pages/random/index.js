import Head from 'next/head';
import Link from 'next/link';

function Random({ data }) {
    return (
        <>
            <Head>
                <title>Random Page</title>
            </Head>

            <main className='container mx-auto mt-12'>
                <h1 className='text-3xl mb-2'>Fecth random Word</h1>
                <ul>
                    {data.map((todo) => {
                        return (
                            <li key={todo.id} className={'border border-indigo-500 p-4'}>
                                {todo?.title ?? 'No title'} <Link href={`/random/${todo.id}`}>Launch</Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => json);
        return { data };
    } catch (error) {
        return { error };
    }
};

export default Random;
