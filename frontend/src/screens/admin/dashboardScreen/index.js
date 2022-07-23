import Footer from '../../../partials/Footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/Breadcrumbs';

export default function DashboardScreen(){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Visualizar' color='cm-primary' title='Dashboard' bread={{
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
