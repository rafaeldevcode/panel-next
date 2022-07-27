import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import UsersBodyScreen from './usersBodyScreen';

export default function UsersScreen({ users, menus, notifications }){
    const options = {
        'add': {
            'href': '/admin/users/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'users'
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
                            title='Usuários'
                            icon='bi bi-people-fill' 
                            bread={bread}
                            options={options}
                        />
                    </section>

                    <UsersBodyScreen users={users.users} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
