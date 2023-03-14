import Head from 'next/head';
import Link from 'next/link';

function Todo({ data }) {
    return (
        <>
            <Head>
                <title>Random Page {data.title}</title>
            </Head>

            <main className='container mx-auto mt-12'>
                <h1 className='text-3xl mb-2'>{data.title}</h1>
                <p>Please compleate your task</p>
                <Link href={'/random'}>Back to random page</Link>
            </main>
        </>
    );
}

Todo.getInitialProps = async (props) => {
    const { id } = props.query;
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((json) => json);
        return { data };
    } catch (error) {
        return { error };
    }
};

export default Todo;
