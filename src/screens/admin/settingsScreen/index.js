import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';

export default function SettingsScreen({ menus, notifications }){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} />

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

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
