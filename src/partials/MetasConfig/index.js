import Head from "next/head";
import siteconfig from '../../../config/siteconfig.json';

export default function MetasConfig({ title }){
    return (
        <Head>
            <meta name='author' content='Rafael Vieira | github.com/rafaeldevcode' />
            <meta name='description' content={siteconfig.site.description} />

            <title>{title}</title>
        </Head>
    )
}
