import { createSwaggerSpec } from 'next-swagger-doc';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export async function getStaticProps(ctx){
    const spec = createSwaggerSpec({
        title: 'Back End Demo - Swagger Docs',
        version: '0.1.0',
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Back End Demo - Swagger Docs',
                version: '0.1.0',
            },
        },
    });

    return { props: { spec } };
};

export default function ApiDoc({ spec }){
    return <SwaggerUI spec={spec} />;
};
