import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import Notification from '../../../partials/notifications';
import AddEditBody from './addEditBodyScreen';

export default function AddEditPermissions({ menus, notifications }){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs 
                            type='Adicionar' 
                            color='cm-success' 
                            title='Permições' 
                            icon='bi bi-file-earmark-lock-fill'
                        />
                    </section>

                    <AddEditBody menus={menus.menus} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>
            <Footer />
        </>
    )
}