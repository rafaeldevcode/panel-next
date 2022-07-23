import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Link from 'next/link';
import NotificationsBodyScreen from './notificationsBodyScreen';

export default function NotificationsScreen({ notifications, menus }){
    const options = {
        'add': {
            'href': '/admin/notifications/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'notifications'
    };

    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-secondary' 
                            title='Notificações' 
                            icon='bi bi-bell-fill'
                            bread={bread} 
                            options={options}    
                        />
                    </section>

                    <NotificationsBodyScreen notifications={notifications.notifications} />
                </section>
            </section>
            <Footer />
        </>
    )
}
