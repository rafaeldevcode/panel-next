import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import ModalImagesProfile from './partials/modalImagesProfile';
import Notification from '../../../partials/notifications';
import ProfileBodyScreen from './profileBodyScreen';

export default function ProfileScreen({ menus, notifications }){
    return (
        <>
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Perfil' icon='bi bi-person-bounding-box' />
                    </section>

                    <ProfileBodyScreen />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>

            {/* Modal for image profile */}
            <ModalImagesProfile />
            <Footer />
        </>
    );
}
