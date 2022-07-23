import Footer from '../../../partials/Footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/Breadcrumbs';

export default function UsersScreen(){
    const options = {
        'add': {
            'href': '/admin/users/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'users'
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
                            title='Usuários' 
                            bread={bread}
                            options={options}
                        />
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}
