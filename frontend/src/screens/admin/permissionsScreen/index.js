import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Link from 'next/link';
import PermissionsBodyScreen from './permissionsBodyScreen';

export default function PermissionsScreen({ permisions }){
    const options = {
        'add': {
            'href': '/admin/permissions/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'permissions'
    };

    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-primary' 
                            title='Permições' 
                            bread={bread} 
                            options={options}
                        />
                    </section>

                    <PermissionsBodyScreen permisions={permisions.permisions} />
                </section>
            </section>
            <Footer />
        </>
    )
}
