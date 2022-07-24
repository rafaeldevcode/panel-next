import Head from 'next/head';
import Script from 'next/script';
import siteconfig from '../../config/siteconfig.json';
import '../styles/globals.sass';

export default function MyApp({ Component, pageProps }) {
    return ( 
        <>
            <Head>
                <link rel='stylesheet' href='/assets/css/style.css' />
                <link rel='stylesheet' href='/assets/icons/bootstrap-icons.css' />
                <link rel="icon" type={`image/${siteconfig.site.favicon.type}`} href={siteconfig.site.favicon.src}></link>
            </Head>
            <Component {...pageProps} /> 
            <Script strategy='beforeInteractive' src='/assets/js/bootstrap.js' />
        </>
    )
}
