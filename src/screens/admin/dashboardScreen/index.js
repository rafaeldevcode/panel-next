import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import DashboardBodyScreen from './dashboardBodyScreen';
import Notifications from '../../../partials/notifications';
import MetasConfig from '../../../partials/metasConfig';

export default function DashboardScreen({ menus, notifications, user }){
    return (
        <>
            <MetasConfig title='Dashboard' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Visualizar' color='cm-secondary' title='Dashboard' icon='bi bi-speedometer' />
                    </section>

                    <DashboardBodyScreen/>
                </section>

                <Notifications notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
