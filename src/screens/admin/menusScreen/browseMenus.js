import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import BrowseBodyScreen from './browseBodyScreen';
import Notification from '../../../partials/notifications';
import MetasConfig from '../../../partials/metasConfig';

export default function BrowseMenus({ menus, notifications, user }){
    const options = {
        'add': {
            'href': '/admin/menus/add'
        },
        'delete': {
            'href': '#'
        },
        'search': true
    };

    return (
        <>
            <MetasConfig title='Listar menus' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Listar' 
                            color='cm-secondary' 
                            title='Menus' 
                            icon='bi bi-menu-button-wide-fill'
                            options={options}    
                        />
                    </section>

                    <BrowseBodyScreen menus={menus.menus} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
