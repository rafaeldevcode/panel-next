import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return ( 
        <>
            <Head>
                <link rel='stylesheet' href='/assets/css/style.css' />
                <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
            </Head>
            <Component {...pageProps} /> 
        </>
    )
}
