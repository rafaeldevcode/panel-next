import Footer from '../../../partials/footer';
import Header from '../../../partials/header';
import Sidebar from '../../../partials/sidebar';
import Breadcrumbs from '../../../partials/breadcrumbs';
import ModalImagesProfile from './partials/modalImagesProfile';
import Notification from '../../../partials/notifications';
import ProfileBodyScreen from './profileBodyScreen';
import MetasConfig from '../../../partials/MetasConfig';

export default function ProfileScreen({ menus, notifications, user, permissions }){
    return (
        <>
            <MetasConfig title='Editar perfil' />
            <section className='d-flex flex-nowrap justify-content-between'>
                <Sidebar menus={menus.menus} user={user} />

                <section className='w-100'>
                    <Header />

                    <section className='p-3'>
                        <Breadcrumbs type='Editar' color='cm-primary' title='Perfil' icon='bi bi-person-bounding-box' />
                    </section>

                    <ProfileBodyScreen user={user} />
                </section>

                <Notification notifications={notifications.notifications} />
            </section>

            {/* Modal for image profile */}
            <ModalImagesProfile />
            <Footer />
        </>
    );
}
