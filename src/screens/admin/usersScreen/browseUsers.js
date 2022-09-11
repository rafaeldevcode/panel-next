import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import BrowseBodyScreen from './browseBodyScreen';
import MetasConfig from '../../../partials/metasConfig';

export default function BrowseUsers({ users, menus, notifications, user }){
    const options = {
        'add': {
            'href': '/admin/users/add'
        },
        'delete': {
            'href': '#'
        },
        'search': true
    };

    return (
        <>
            <MetasConfig title='Listar usuários' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-secondary' 
                            title='Usuários'
                            icon='bi bi-people-fill'
                            options={options}
                        />
                    </section>

                    <BrowseBodyScreen users={users.users} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
