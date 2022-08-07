import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import NotificationsBodyScreen from './notificationsBodyScreen';

export default function NotificationsScreen({ notifications, menus, user }){
    const options = {
        'add': {
            'href': '/admin/notifications/add'
        },
        'delete': {
            'href': '#'
        },
        'search': true
    };

    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-secondary' 
                            title='Notificações' 
                            icon='bi bi-bell-fill'
                            options={options}    
                        />
                    </section>

                    <NotificationsBodyScreen notifications={notifications.notifications} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
