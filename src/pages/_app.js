import Head from 'next/head';
import Script from 'next/script';
import siteconfig from '../../config/siteconfig.json';
import '../styles/globals.sass';

export default function MyApp({ Component, pageProps }) {
    return ( 
        <>
            <Head>
                <link rel='stylesheet' href='/assets/css/style.css' />
                <link rel='stylesheet' href='/libs/bootstrap/bootstrap-icons.css' />
                <link rel="icon" type={`image/${siteconfig.site.favicon.type}`} href={siteconfig.site.favicon.src}></link>
            </Head>
            <Component {...pageProps} /> 
            
            <Script strategy='beforeInteractive' src='/libs/jquery/jquery.js' />
            <Script strategy='beforeInteractive' src='/libs/bootstrap/bootstrap.js' />
        </>
    )
}
