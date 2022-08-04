import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import BrowseBody from './browseBodyScreen';

export default function BrowsePermissions({ permissions, menus, notifications, user }){
    const options = {
        'add': {
            'href': '/admin/permissions/add'
        },
        'delete': {
            'href': '#'
        }
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
                            title='Permições' 
                            icon='bi bi-file-earmark-lock-fill'
                            options={options}
                        />
                    </section>

                    <BrowseBody permissions={permissions.permissions} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
