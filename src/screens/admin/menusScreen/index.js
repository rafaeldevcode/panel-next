import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import MenusBodyScreen from './menusBodyScreen';
import Notification from '../../../partials/notifications';

export default function MenusScreen({ menus, notifications }){
    const options = {
        'add': {
            'href': '/admin/menus/add'
        },
        'delete': {
            'href': '#'
        }
    };
    const bread = {
        '1':'&gt;',
        '2': 'admin',
        '3': '&gt;',
        '4': 'menus'
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
                            title='Menus' 
                            icon='bi bi-menu-button-wide-fill'
                            bread={bread} 
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
