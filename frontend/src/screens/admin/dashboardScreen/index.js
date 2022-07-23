import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';

export default function DashboardScreen(){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Visualizar' color='cm-primary' title='Dashboard' icon='bi bi-speedometer' bread={{
                            '1':'&gt;',
                            '2': 'admin',
                            '3': '&gt;',
                            '4': 'dashboard'
                        }} />
                    </section>
                </section>
            </section>
            <Footer />
        </>
    )
}
