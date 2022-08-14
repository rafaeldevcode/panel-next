import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import MetasConfig from '../../../partials/MetasConfig';

export default function SettingsScreen({ menus, notifications, user }){
    return (
        <>
            <MetasConfig title='Configurações do site' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Configurações' icon='bi bi-gear-fill' />
                    </section>
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
