import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import BrowseBodyScreen from './browseBodyScreen';
import MetasConfig from '../../../partials/MetasConfig';

export default function BrowseNotifications({ notifications, menus, user }){
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
            <MetasConfig title='Listar notificações' />
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

                    <BrowseBodyScreen notifications={notifications.notifications} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
