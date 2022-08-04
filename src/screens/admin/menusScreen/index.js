import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import MenusBodyScreen from './menusBodyScreen';
import Notification from '../../../partials/notifications';

export default function MenusScreen({ menus, notifications, user }){
    const options = {
        'add': {
            'href': '/admin/menus/add'
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
                            title='Menus' 
                            icon='bi bi-menu-button-wide-fill'
                            options={options}    
                        />
                    </section>

                    <MenusBodyScreen menus={menus.menus} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}
