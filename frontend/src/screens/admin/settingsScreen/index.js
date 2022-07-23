import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';

export default function SettingsScreen(){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Configurações' icon='bi bi-gear-fill' bread={{
                            '1':'&gt;',
                            '2': 'admin',
                            '3': '&gt;',
                            '4': 'settings'
                        }} />
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}
